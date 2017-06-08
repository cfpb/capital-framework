var exec = require('child-process-promise').exec;
var util = {
  printLn: require('./print'),
  git: require('./git')
}

function docs(version) {
  return checkoutDocs()
  .then(installDeps)
  .then(updateDeps)
  .then(build)
  .then(function() {
    return commit(version);
  })
  .then(push)
  .then(checkoutMaster);
}

function checkoutDocs() {
  util.printLn.info('Checking out gh-pages-test branch...');
  return util.git.checkoutDocs();
}

function installDeps() {
  util.printLn.info('Installing the dependencies');
  return exec('npm install');
}

function updateDeps() {
  util.printLn.info('Updating the dependencies');
  return exec('npm update');
}

function build() {
  util.printLn.info('Rebuilding the project');
  return exec('npm run build');
}

function commit(version) {
  util.printLn.info('Committing dependency changes');
  return util.git.commit('Rebuilding the docs for Capital Framework ' + version);
}

function push() {
  return exec('git push "https://' + process.env.GH_TOKEN + '@github.com/cfpb/capital-framework.git" gh-pages-test')
}

function checkoutMaster() {
  util.printLn.info('Documentation was successfully updated.');
  return util.git.checkoutMaster();
}

module.exports = docs;
