var fs = require('fs');

module.exports = {
  printLn: require('./print'),
  confirm: require('./confirm'),
  getGitStatus: require('./gitStatus'),
  build: require('./build'),
  getNpmVersion: require('./getNpmVersion'),
  pkg: JSON.parse(fs.readFileSync('package.json', 'utf8')),
  option: require('./getArgs')
}
