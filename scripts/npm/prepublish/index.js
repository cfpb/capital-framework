const envvars = require( '../../../../config/environment' ).envvars;
const fs = require( 'fs' );
const isTravis = require( 'is-travis' );
const logSymbols = require( 'log-symbols' );
const path = require( 'path' );
const Promise = require( 'bluebird' );
const readdir = require( 'fs-readdir-promise' );
const semver = require( 'semver' );
const util = require( './lib' );

const componentsDir = path.join( __dirname, '..', '..', '..', 'src' );
let componentsToPublish = [];
let UNDEFINED;

// Check git's status.
util.getGitStatus( './' )
  // Abort if the working directory isn't clean.
  .then( handleGitStatus )
  // Verify they're logged into npm.
  .then( checkCredentials )
  // Travis operates in a detached head state so checkout the master branch.
  .then( checkoutMaster )
  // Get a list of CF components from the components/ dir.
  .then( getComponents )
  // Filter the components that have had their versions incremented.
  .then( filterComponents )
  // Build the components.
  .then( buildComponents )
  // Confirm that the user wants to publish them.
  .then( confirmPublish )
  // Write the new version to the master component's manifest.
  .then( updateManifest )
  // Write the new version to the changelog.
  .then( updateChangelog )
  // Commit the change.
  .then( commit )
  // Tag the new version.
  .then( tag )
  // Push the change to GitHub.
  .then( push )
  // Publish the components.
  .then( publishComponents )
  // All done.
  .then( finish )
  // Report any errors that happen along the way.
  .catch( handleError );

/**
 * Generic error handler
 * @param {string} msg The message to print to terminal.
 */
function handleError( msg ) {
  util.printLn.error( msg );
  process.exit( 1 );
}

function handleGitStatus( result ) {
  if ( !result.stdout && !result.stderr ) {
    util.printLn.info( 'Git working directory is clean.' );
  } else if ( util.option.dryrun ) {
    util.printLn.warning(
      'Your working directory isn\'t clean but this is a dry ' +
        'run so I’ll continue...'
    );
  } else {
    util.printLn.error(
      'Git working directory is not clean. Commit your work before publishing.'
    );
    process.exit( 1 );
  }
}

function checkCredentials( result ) {
  // Travis gets its credentials from .travis.yml
  if ( isTravis ) return '';
  if ( util.option.dryrun ) {
    return util.printLn.warning(
      'I\'m not verifying your npm permissions because this is a dry run.'
    );
  }
  util.printLn.info( 'Checking npm credentials...' );
  return util.checkNpmAuth( util.pkg.name );
}

function checkoutMaster() {
  // Travis operates in a detached head state so checkout the master branch.
  if ( isTravis ) {
    util.printLn.info(
      'Checking out ' + envvars.GH_PROD_BRANCH + ' branch...'
    );
    return util.git.checkoutMaster();
  }
  if ( util.option.dryrun ) {
    return util.printLn.warning(
      'You’re not on the proper release branch but this is a dry run so ' +
      'I’ll continue anyway.'
    );
  }
  return util.git.checkBranch().then( function( result ) {
    if ( !envvars.GH_PROD_BRANCH || !envvars.GH_DEV_BRANCH ) {
      util.printLn.error(
        'Publishing to npm from you local machine isn’t recommended but if ' +
        'you’d like to do it anyway, define GH_PROD_BRANCH and ' +
        'GH_DEV_BRANCH env variables.'
      );
      process.exit( 1 );
    }
    if ( result.stdout.trim() !== envvars.GH_PROD_BRANCH ) {
      util.printLn.error(
        'You’re not on the ' + envvars.GH_PROD_BRANCH +
        ' branch. Merge your changes into ' + envvars.GH_PROD_BRANCH +
        ' before publishing.'
      );
      process.exit( 1 );
    }
  } );

}

function getComponents() {
  return readdir( componentsDir );
}

function filterComponents( components ) {
  const promises = components.map( compareVersionNumber );
  promises.push( compareMasterVersionNumber() );
  util.printLn.info(
    'Checking which components need to be published to npm...'
  );
  return Promise.all( promises );
}

function compareVersionNumber( component ) {
  if ( component.indexOf( 'cf-' ) !== 0 ) return '';

  const manifest = componentsDir + '/' + component + '/package.json';
  // eslint-disable-next-line no-sync
  const manifestFile = fs.readFileSync( manifest, 'utf8' );
  const localVersion = JSON.parse( manifestFile ).version;

  return util.getNpmVersion( component ).then( data => {
    const npmVersion = data['dist-tags'].latest;
    if ( semver.gt( localVersion, npmVersion ) ) {
      util.printLn.success(
        component + ': ' + npmVersion + ' -> ' + localVersion, true
      );
      return {
        name:       component,
        newVersion: localVersion,
        oldVersion: npmVersion
      };
    } else if ( semver.lt( localVersion, npmVersion ) ) {
      util.printLn.error(
        'Error: ' + component + ' was bumped to ' + localVersion +
        ' locally but the latest version on npm is ' + npmVersion + '.',
        true
      );
    } else {
      util.printLn.info( component + ' remains ' + npmVersion, true );
    }
    return {};
  } ).catch( err => {
    if ( ( /returned 404/ ).test( err ) ) {
      util.printLn.success( component + ': ' + localVersion, true );
      return {
        name:       component,
        newVersion: localVersion,
        oldVersion: UNDEFINED
      };
    }
    util.printLn.error( err );
    process.exit( 1 );
    return {};
  } );
}

function compareMasterVersionNumber() {
  return util.getNpmVersion( util.pkg.name ).then( function( data ) {
    return {
      'new': util.pkg.version,
      'old': data['dist-tags'].latest
    };
  } );
}

function buildComponents( components ) {
  const diffs = [];
  const masterComponent = components.pop();

  /* TODO: Fix bug that results in some entries in the components array to be
     blank. For now, filter them out. */
  componentsToPublish = components.filter( component => {
    let diff;
    if ( component ) {

      /* While we're iterating, keep track of each component's semver diff.
         If there's no old version it means it's a new component and CF should
         get a minor bump instead of whatever the actual diff is. */
      diff = component.oldVersion ? semver.diff(
        component.oldVersion, component.newVersion
      ) : 'minor';
      diffs.push( diff );
      return component.name !== UNDEFINED;
    }
    return false;
  } );

  // If no components were updated, check if the master component was updated.
  if ( !componentsToPublish.length ) {
    util.printLn.error( 'No components\' versions were updated.' );
    if ( semver.gt( masterComponent.new, masterComponent.old ) ) {
      util.printLn.success(
        util.pkg.name + '\'s version was manually updated: ' +
        masterComponent.old + ' -> ' + masterComponent.new + '.'
      );
      util.printLn.info( 'Building components now...' );
      return util.build();
    }
    if ( util.option.dryrun ) {
      return util.printLn.warning(
        'There’s nothing to publish (no component versions have been ' +
        'incremented) but this is a dry run so I’ll continue anyway.'
      );
    }
    util.printLn.error(
      util.pkg.name +
      '’s version also wasn’t updated. Nothing to publish. Abort.'
    );
    process.exit( 1 );
  }

  // Sort the diffs and increment CF by the first (largest) increment.
  const newVersion = semver.inc( masterComponent.old, diffs.sort().shift() );

  util.printLn.success(
    util.pkg.name + ' will be published: ' + masterComponent.old + ' -> ' +
    newVersion + '. See https://goo.gl/cZvnnL.'
  );
  util.pkg.version = newVersion;
  util.printLn.info( 'Building components now...' );
  return util.build();
}

function confirmPublish() {
  util.printLn.info( 'Components have been built to tmp/. ' );
  return util.confirm( {
    prompt: 'Publish the above components marked with a ' +
            logSymbols.success + ' ?',
    yes:    'Publishing the components to npm...',
    no:     'Aborting. See ya!'
  } );
}

function updateManifest() {
  if ( util.option.dryrun ) {
    return util.printLn.warning(
      'I did not update package.json because this is a dry run.'
    );
  }
  // eslint-disable-next-line no-sync
  fs.writeFileSync( 'package.json', JSON.stringify( util.pkg, null, 2 ) );
  return '';
}

function updateChangelog() {
  if ( util.option.dryrun ) {
    return util.printLn.warning(
      'I did not update the changelog because this is a dry run.'
    );
  }
  return util.changelog(
    path.join( __dirname, '..', '..', '..', 'CHANGELOG.md' ),
    new Date().toJSON().slice( 0, 10 ),
    util.pkg.version
  );
}

function commit() {
  if ( util.option.dryrun ) {
    return util.printLn.warning(
      'I did not commit any changes because this is a dry run.'
    );
  }
  util.printLn.info( 'Committing change to manifest...' );
  return util.git.commit( util.pkg.version );
}

function tag( result ) {
  if ( result && result.stdout ) util.printLn.console( result.stdout );
  if ( util.option.dryrun ) {
    return util.printLn.warning(
      'I did not create a new tag because this is a dry run.'
    );
  }
  util.printLn.info( 'Tagging version ' + util.pkg.version + '...' );
  return util.git.tag( util.pkg.version );
}

function push( result ) {
  if ( result && result.stdout ) util.printLn.console( result.stdout );
  if ( util.option.dryrun ) {
    return util.printLn.warning(
      'I did not push to GitHub because this is a dry run.'
    );
  }
  util.printLn.info( 'Pushing commit to GitHub...' );
  return util.git.push( util.pkg.repository.url );
}

function publishComponents( result ) {
  if ( result && result.stdout ) util.printLn.console( result.stdout );
  if ( util.option.dryrun ) {
    util.printLn.warning(
      'I did not publish anything to npm because this is a dry run.'
    );
  } else {
    if ( !componentsToPublish.length ) return UNDEFINED;
    const components = componentsToPublish.map( component => component.name );
    util.printLn.info( 'Publishing ' + components.join( ', ' ) + ' to npm...' );
    return Promise.all( components.map( util.publish ) );
  }
  return UNDEFINED;
}

function finish( result ) {
  if ( result && result.stdout ) util.printLn.console( result.stdout );
  util.printLn.success( 'Hooray! All done!' );
}
