var exec = require('child-process-promise').exec;

function status(path) {
  return exec('git status -s ' + path);
}

module.exports = status;
