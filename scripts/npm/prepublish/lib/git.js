const childProcess = require( 'child-process-promise' );

const git = {
  checkoutMaster: function() {
    return childProcess.exec( 'git checkout ' + process.env.GH_PROD_BRANCH );
  },
  checkBranch: function() {
    return childProcess.exec( 'git rev-parse --abbrev-ref HEAD' );
  },
  commit: function( version ) {
    const msg = version || 'Auto-incrementing version';
    return childProcess.exec( 'git commit -am "' + msg + '"' );
  },
  tag: function( version ) {
    return childProcess.exec( 'git tag -a ' + version + ' -m "' + version + '"' );
  },
  push: function( remote ) {
    if ( process.env.GH_TOKEN ) {
      remote = remote.match( /github\.com.+/ )[0];
      return Promise.all( [
        childProcess.exec(
          'git push "https://' + process.env.GH_TOKEN + '@' + remote + '" ' +
          process.env.GH_PROD_BRANCH
        ),
        childProcess.exec(
          'git push "https://' + process.env.GH_TOKEN + '@' + remote + '" ' +
          process.env.GH_PROD_BRANCH + ':' + process.env.GH_DEV_BRANCH
        ),
        childProcess.exec(
          'git push "https://' + process.env.GH_TOKEN + '@' + remote +
          '" --tags'
        )
      ] );
    }
    return Promise.all( [
      childProcess.exec( 'git push ' + remote + ' ' + process.env.GH_PROD_BRANCH ),
      childProcess.exec(
        'git push ' + remote + ' ' + process.env.GH_PROD_BRANCH + ':' +
        process.env.GH_DEV_BRANCH
      ),
      childProcess.exec( 'git push ' + remote + ' --tags' )
    ] );
  }
};

module.exports = git;
