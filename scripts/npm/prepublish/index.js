var path = require('path'),
    fs = require('fs'),
    readdir = require('fs-readdir-promise'),
    Promise = require('bluebird');
    semver = require('semver'),
    logSymbols = require('log-symbols'),
    util = require('./lib'),
    componentsDir = path.join(__dirname, '..', '..', '..', 'src'),
    componentsToPublish = [];

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
  // if (err) return console.log(err);
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
  var weShouldBumpCF = false,
      newVersion;
  componentsToPublish = components.filter(function(component) {
    if (component) {
      // According to [these rules](https://github.com/cfpb/capital-framework/issues/179)
      // we only bump the CF version when a component undergoes a major bump.
      // With this new single-repo format, we may need to revisit our SemVer strategy.
      weShouldBumpCF = semver.diff(component.oldVersion, component.newVersion) === 'major';
      return component.name !== undefined;
    }
  });
  if (weShouldBumpCF) {
    newVersion = semver.inc(util.pkg.version, 'major');
    util.printLn.success('capital-framework will also be published: ' + util.pkg.version + ' -> ' + newVersion + '. See https://goo.gl/cZvnnL.');
  } else {
    util.printLn.info('capital-framework\'s version will not change. See https://goo.gl/cZvnnL.');
  }
  util.printLn.info('Building components now...');
  return Promise.all(componentsToPublish.map(util.build));
}

function confirmPublish() {
  util.printLn.info('Components successfully built to tmp/.');
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
  // This is a temporarily overwrite for testing purposes.
  components = ['cf-buttons'];
  return Promise.all(components.map(util.publish));
}

function finish(stdout) {
  stdout.forEach(function(component) {
    component = component.stdout.slice(2).replace('\n', '');
    util.printLn.success(component, true);
  });
  util.printLn.success('Hooray! All done!');
  process.exit(0);
}
