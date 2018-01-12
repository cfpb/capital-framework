const RegClient = require( 'silent-npm-registry-client' );
const client = new RegClient();
const promisify = require( 'promisify-node' );

promisify( client );

/**
 * Get a package's details from NPM.
 * @param {string} component A required component name.
 * @returns {Function} The package data returned from NPM.
 */
function getVersion( component ) {
  const uri = 'https://registry.npmjs.org/' + component;
  return client.get( uri, { timeout: 1000 } );
}

module.exports = getVersion;
