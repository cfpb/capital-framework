'use strict';

var RegClient = require( 'silent-npm-registry-client' );
var client = new RegClient();
var promisify = require( 'promisify-node' );

promisify( client );

function getVersion( component ) {
  var uri = 'https://registry.npmjs.org/' + component;
  return client.get( uri, { timeout: 1000 } );
}

module.exports = getVersion;
