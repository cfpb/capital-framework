const childProcess = require( 'child-process-promise' );

/**
 * Gets the git status of a directory.
 * @param {string} path The path we want to check the status of.
 * @returns {Function} The status of the directory.
 */
function status( path ) {
  return childProcess.exec( 'git status -s ' + path );
}

module.exports = status;
