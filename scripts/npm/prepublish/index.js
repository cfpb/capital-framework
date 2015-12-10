var path = require('path'),
    fs = require('fs'),
    readdir = require('fs-readdir-promise'),
    Promise = require('bluebird'),
    semver = require('semver'),
    inPublish = require('in-publish').inPublish,
    logSymbols = require('log-symbols'),
    util = require('./lib'),
    componentsDir = path.join(__dirname, '..', '..', '..', 'src'),
    componentsToPublish = [];

// Npm `prepublish` scripts are run after `install`. We want this script to only
// run if the user explicity ran `npm publish` so abort if that's not the case.
// See: https://github.com/npm/npm/issues/3059
if (!inPublish()) {
  return process.exit(0);
}

// Check git's status.
util.getGitStatus('./')
  // Abort if the working directory isn't clean.
  .then(handleGitStatus)
  // Get a list of CF components from the components/ dir.
  .then(getComponents)
  // Filter the components that have been updated and need to be published.
  .then(filterComponents)
  // Build those components.
  .then(buildComponents)
  // Confirm that the user wants to publish them.
  .then(confirmPublish)
  // Publish those components.
  .then(publishComponents)
  // Bump CF's version if necessary.
  .then(updateCF)
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
    util.printLn.success('Git working directory is clean.');
  } else {
    util.printLn.error('Git working directory is not clean. Commit your work before publishing.');
    process.exit(1);
  }
}

function getComponents() {
  return readdir(componentsDir);
}

function filterComponents(components) {
  util.printLn.info('Checking which components need to be published to npm...');
  return Promise.all(components.map(compareVersionNumber));
}

function compareVersionNumber(component) {
  if (component.indexOf('cf-') !== 0) return;
  var manifest = componentsDir + '/' + component + '/package.json',
      localVersion = JSON.parse(fs.readFileSync(manifest, 'utf8')).version;
  return util.getNpmVersion(component).then(function(data) {
  // return util.getNpmVersion('log-symbols').then(function(data) {
    var npmVersion = data['dist-tags'].latest;
    // var npmVersion = '2.0.0';
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
    util.printLn.error(err);
    process.exit(1);
  });
}

function buildComponents(components) {
  var newVersion,
      bumps = [];

  // TODO: Fix bug that results in some entries in the components array to be
  // blank. For now, filter them out.
  componentsToPublish = components.filter(function(component) {
    if (component) {
      // While we're iterating, keep track of each component's semver diff
      bumps.push(semver.diff(component.oldVersion, component.newVersion));
      return component.name !== undefined;
    }
  });

  // If there's nothing to publish. Abort everything.
  if (!componentsToPublish.length) {
    util.printLn.error('No components\' versions were updated so nothing will be published. Aborting.');
    process.exit(0);
  }

  // Sort the diffs and increment CF by whatever the first (largest) increment is
  newVersion = semver.inc(util.pkg.version, bumps.sort().shift());
  util.printLn.success('capital-framework will also be published: ' + util.pkg.version + ' -> ' + newVersion + '. See https://goo.gl/cZvnnL.');
  util.pkg.version = newVersion;
  fs.writeFileSync('package.json', JSON.stringify(util.pkg))
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

function publishComponents() {
  var components = componentsToPublish.map(function(component) {
    return component.name;
  });
  return Promise.all(components.map(util.publish));
}

function updateCF() {
  // return new Promise(function(resolve) {
  //   if (!bumpCF) {
  //     return resolve();
  //   }
    return commitAndPush(util.pkg.version);
  // });
}

function finish(result) {
  console.log(result);
  // stdout.forEach(function(component) {
  //   component = component.stdout.slice(2).replace('\n', '');
  //   util.printLn.success(component, true);
  // });
  util.printLn.success('Hooray! All done!');
  process.exit(0);
}
