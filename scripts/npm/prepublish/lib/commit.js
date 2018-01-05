const exec = require( 'child-process-promise' ).exec;

function commit( version ) {
  const msg = version || 'Auto-incrementing version';
  return exec( 'git commit -am "' + msg + '"' );
}

module.exports = commit;
