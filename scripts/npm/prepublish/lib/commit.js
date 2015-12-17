var exec = require('child-process-promise').exec;

function commit(version) {
  var msg = version || "Auto-incrementing version";
  return exec('git commit -am "' + msg + '"');
}

module.exports = commit;
