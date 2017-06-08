var fs = require('fs');

module.exports = {
  printLn: require('./print'),
  confirm: require('./confirm'),
  getGitStatus: require('./gitStatus'),
  build: require('./build'),
  publish: require('./publish'),
  git: require('./git'),
  changelog: require('./changelog'),
  getNpmVersion: require('./getNpmVersion'),
  checkNpmAuth: require('./checkNpmAuth'),
  pkg: JSON.parse(fs.readFileSync('package.json', 'utf8')),
  option: require('./getArgs'),
  docs: require('./docs')
}

process.on('SIGINT', function() {
  module.exports.printLn.error('OMG ABORT EVERYTHING.');
  process.exit(1);
});
