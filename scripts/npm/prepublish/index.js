var path = require('path'),
    fs = require('fs'),
    readdir = require('fs-readdir-promise'),
    Promise = require('bluebird');
    semver = require('semver'),
    printLn = require('./lib/print'),
    getGitStatus = require('./lib/gitStatus'),
    getNpmVersion = require('./lib/getNpmVersion'),
    componentsDir = path.join(__dirname, '../../../components');

// Check git's status.
getGitStatus('./')
  // Abort if the working directory isn't clean.
  .then(handleGitStatus)
  // Get a list of CF components from the components/ dir.
  .then(getComponents)
  // Filter the components that have been updated and need to be published.
  .then(filterComponents)
  // Build those components.
  .then(buildComponents)
  // Publish those components.
  .then(publishComponents)
  // Report any errors that happen along the way.
  .catch(printLn.error);

function handleGitStatus(result) {
  if (!result.stdout && !result.stderr) {
    console.log('Git working directory is clean.');
  } else {
    printLn.error('Git working directory is not clean. Commit your work before publishing.');
    process.exit(1);
  }
}

// Go through all the components dirs and compare the version in package.json
// with the latest version published to npm.
function getComponents() {
  return readdir(componentsDir);
}

function filterComponents(components) {
  // if (err) return console.log(err);
  printLn.info('Checking which components need to be published to npm...');
  return Promise.all(components.map(compareVersionNumber));
}

function compareVersionNumber(component) {
  if (component.indexOf('cf-') !== 0) return;
  var manifest = componentsDir + '/' + component + '/package.json',
      localVersion = JSON.parse(fs.readFileSync(manifest, 'utf8')).version;
  return getNpmVersion('log-symbols').then(function(data) {
    // var npmVersion = data['dist-tags'].latest;
    var npmVersion = '2.0.0';
    // If local version number is greater than the latest version on npm.
    if (semver.gt(localVersion, npmVersion)) {
      printLn.success(component + ': bumped from ' + npmVersion + ' to ' + localVersion, true);
      // Return it so that we know to publish it.
      return component;
    // If local version number is less than the latest version on npm.
    } else if (semver.lt(localVersion, npmVersion)) {
      printLn.error('Error: ' + component + ' was bumped to ' + localVersion + ' locally but the latest version on npm is ' + npmVersion + '.', true);
      process.exit(1);
    // If the version numbers are the same.
    } else {
      printLn.info(component + ': still at ' + npmVersion, true);
    }
  }).catch(function(err) {
    printLn.error(err);
    process.exit(1);
  });
}

function buildComponents(components) {
  components = components.filter(function(c) {
    return c !== undefined;
  }); 
  printLn.info('Components that will be published: ' +  components.join(', '));
  printLn.info('Building them now...');
  // console.log(components);
}

function publishComponents(components) {
  // console.log(components);
  printLn.info('Publishing the components to npm...');
}
