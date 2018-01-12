const childProcess = require( 'child-process-promise' );

/**
 * Run the appropriate build command.
 * @param {Object} component An optional component object with a name property.
 * @returns {Function} The build command to run.
 */
function build( component ) {
  if ( component ) {
    return childProcess.exec( 'gulp build --component=' + component.name );
  }
  // If no component is specified, build all of CF.
  return childProcess.exec( 'gulp build' );
}

module.exports = build;
