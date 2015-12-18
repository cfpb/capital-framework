var exec = require('child-process-promise').exec;

var git = {
  checkoutMaster: function() {
    return exec('git checkout ' + process.env.GH_BRANCH);
  },
  checkBranch: function() {
    return exec('git rev-parse --abbrev-ref HEAD');
  },
  commit: function(version) {
    var msg = version || 'Auto-incrementing version';
    return exec('git commit -am "' + msg + '"');
  },
  tag: function(version) {
    return exec('git tag -a ' + version + ' -m "' + version + '"');
  },
  push: function(remote) {
    if (process.env.GH_TOKEN) {
      remote = remote.match(/github\.com.+/)[0];
      return Promise.all([
        exec('git push "https://' + process.env.GH_TOKEN + '@' + remote + '" ' + process.env.GH_BRANCH),
        exec('git push "https://' + process.env.GH_TOKEN + '@' + remote + '" --tags')
      ]);
    }
    return Promise.all([
      exec('git push ' + remote + ' ' + process.env.GH_BRANCH),
      exec('git push ' + remote + ' --tags')
    ]);
  }
}

module.exports = git;
