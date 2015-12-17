var path = require('path'),
    fs = require('fs'),
    readdir = require('fs-readdir-promise'),
    Promise = require('bluebird'),
    semver = require('semver'),
    inPublish = require('in-publish').inPublish,
    logSymbols = require('log-symbols'),
    util = require('./lib'),
    isTravis = require('is-travis'),
    componentsDir = path.join(__dirname, '..', '..', '..', 'src'),
    componentsToPublish = [];

// Check git's status.
util.getGitStatus('./')
  // Abort if the working directory isn't clean.
  .then(handleGitStatus)
  // Verify they're logged into npm.
  .then(checkCredentials)
  // Travis operates in a detached head state so checkout the master branch.
  .then(checkoutMaster)
  // Get a list of CF components from the components/ dir.
  .then(getComponents)
  // Filter the components that have had their versions incremented.
  .then(filterComponents)
  // Build the components.
  .then(buildComponents)
  // Confirm that the user wants to publish them.
  .then(confirmPublish)
  // Write the new version to the master component's manifest.
  .then(updateManifest)
  // Bump CF's version number in package.json and commit the change.
  .then(commit)
  // Push the change to GitHub.
  .then(push)
  // Publish the components.
  .then(publishComponents)
  // All done.
  .then(finish)
  // Report any errors that happen along the way.
  .catch(handleError);

function handleError(msg) {
  util.printLn.error(msg);
  process.exit(1);
}

function handleGitStatus(result) {
  if (!result.stdout && !result.stderr) {
    util.printLn.info('Git working directory is clean.');
  } else {
    util.printLn.error('Git working directory is not clean. Commit your work before publishing.');
    process.exit(1);
  }
}

function checkCredentials(result) {
  // Travis gets its credentials from .travis.yml
  if (isTravis) return;
  util.printLn.info('Checking npm credentials...');
  return util.checkNpmAuth(util.pkg.name);
}

function checkoutMaster() {
  // Travis operates in a detached head state so checkout the master branch.
  if (isTravis) {
    util.printLn.info('Checking out ' + process.env.GH_BRANCH + ' branch...');
    return util.git.checkoutMaster();
  } else {
    return util.git.checkBranch().then(function(result) {
      if (result.stdout.trim() !== process.env.GH_BRANCH) {
        util.printLn.error('You\'re not on the ' + process.env.GH_BRANCH + ' branch. Merge your changes into ' + process.env.GH_BRANCH + ' before publishing.');
        process.exit(1);
      }
    });
  }
}

function getComponents() {
  return readdir(componentsDir);
}

function filterComponents(components) {
  var promises = components.map(compareVersionNumber);
  promises.push(compareMasterVersionNumber());
  util.printLn.info('Checking which components need to be published to npm...');
  return Promise.all(promises);
}

function compareVersionNumber(component) {
  if (component.indexOf('cf-') !== 0) return;

  var manifest = componentsDir + '/' + component + '/package.json',
      localVersion = JSON.parse(fs.readFileSync(manifest, 'utf8')).version;

  return util.getNpmVersion(component).then(function(data) {
    var npmVersion = data['dist-tags'].latest;
    if (semver.gt(localVersion, npmVersion)) {
      util.printLn.success(component + ': ' + npmVersion + ' -> ' + localVersion, true);
      return {
        name: component,
        newVersion: localVersion,
        oldVersion: npmVersion
      };
    } else if (semver.lt(localVersion, npmVersion)) {
      util.printLn.error('Error: ' + component + ' was bumped to ' + localVersion + ' locally but the latest version on npm is ' + npmVersion + '.', true);
    } else {
      util.printLn.info(component + ' remains ' + npmVersion, true);
    }
  }).catch(function(err) {
    if (/returned 404/.test(err)) {
      util.printLn.success(component + ': ' + localVersion, true);
      return {
        name: component,
        newVersion: localVersion,
        oldVersion: undefined
      };
    }
    util.printLn.error(err);
    process.exit(1);
  });
}

function compareMasterVersionNumber() {
  return util.getNpmVersion(util.pkg.name).then(function(data) {
    return {
      new: util.pkg.version,
      old: data['dist-tags'].latest
    };
  });
}

function buildComponents(components) {
  var newVersion,
      diffs = [],
      masterComponent = components.pop();

  // TODO: Fix bug that results in some entries in the components array to be
  // blank. For now, filter them out.
  componentsToPublish = components.filter(function(component) {
    var bump;
    if (component) {
      // While we're iterating, keep track of each component's semver diff.
      // If there's no old version it means it's a new component and CF should
      // get a minor bump instead of whatever the actual diff is.
      diff = !component.oldVersion ? 'minor' : semver.diff(component.oldVersion, component.newVersion);
      diffs.push(diff);
      return component.name !== undefined;
    }
  });

  // If no components were updated, check if the master component was updated.
  if (!componentsToPublish.length) {
    util.printLn.error('No components\' versions were updated.');
    if (semver.gt(masterComponent.new, masterComponent.old)) {
      util.printLn.success(util.pkg.name + '\'s version was manually updated: ' + masterComponent.old + ' -> ' + masterComponent.new + '.');
      return util.build();
    }
    util.printLn.error(util.pkg.name + '\'s version also wasn\'t updated. Nothing to publish. Abort.');
    process.exit(1);
  }

  // Sort the diffs and increment CF by whatever the first (largest) increment is
  newVersion = semver.inc(masterComponent.old, diffs.sort().shift());
  util.printLn.success(util.pkg.name + ' will also be published: ' + masterComponent.old + ' -> ' + newVersion + '. See https://goo.gl/cZvnnL.');
  util.pkg.version = newVersion;
  util.printLn.info('Building components now...');
  return util.build();
}

function confirmPublish() {
  util.printLn.info('Components have been built to tmp/.');
  return util.confirm({
    prompt: '    Publish the above components marked with a ' + logSymbols.success + ' ?',
    yes: 'Publishing the components to npm...',
    no: 'Aborting. See ya!'
  });
}

function updateManifest() {
  fs.writeFileSync('package.json', JSON.stringify(util.pkg, null, 2));
}

function commit() {
  if (!componentsToPublish.length) return;
  util.printLn.info('Committing change to manifest...');
  return util.git.commit(util.pkg.version);
}

function push(result) {
  if (!componentsToPublish.length) return;
  if (result && result.stdout) util.printLn.console(result.stdout);
  util.printLn.info('Pushing commit to GitHub...');
  return util.git.push(util.pkg.repository.url);
}

function publishComponents(result) {
  if (result && result.stdout) util.printLn.console(result.stdout);
  if (!componentsToPublish.length) return;
  var components = componentsToPublish.map(function(component) {
    return component.name;
  });
  return Promise.all(components.map(util.publish));
}

function finish(result) {
  if (!componentsToPublish.length) return;
  if (result && result.stdout) util.printLn.console(result.stdout);
  util.printLn.success('Hooray! All done!');
  process.exit(0);
}
