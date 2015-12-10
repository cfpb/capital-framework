var exec = require('child-process-promise').exec;

function commitAndPush(version) {
  var msg = version || "Auto-incrementing version";
  return exec('git commit -am "' + msg + '"');
  // return exec('git status');
}

module.exports = commitAndPush;
