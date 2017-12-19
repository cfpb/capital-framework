const childProcess = require( 'child-process-promise' );

/**
 * Publish the passed component.
 * @param {string} component The name of the component to publish.
 * @returns {Function} The command to publish the component.
 */
function publish( component ) {
  return childProcess.exec( 'npm publish', {
    cwd: './tmp/' + component
  } );
}

module.exports = publish;
