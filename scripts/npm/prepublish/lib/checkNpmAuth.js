const RegClient = require( 'silent-npm-registry-client' );
const client = new RegClient();
const promisify = require( 'promisify-node' );
const childProcess = require( 'child-process-promise' );
const printLn = require( './print' );

promisify( client );

/**
 * Checks with NPM to ensure you are a maintainer of the package.
 * @param {Object} component The name to test.
 * @returns {Object} The process that initialized the function.
 */
function checkAuth( component ) {
  const uri = 'https://registry.npmjs.org/' + component;

  const getOwners = client
    .get( uri, { timeout: 10000 } )
    .then( function( data ) {
      return data.maintainers;
    } );
  const getCurrentUser = childProcess.exec( 'npm whoami' );

  return Promise.all( [ getOwners, getCurrentUser ] ).then( data => {
    let authorized = false;
    const currentUser = data[1].stdout.trim();

    printLn.info( 'Logged into npm as ' + currentUser );
    data[0].forEach( maintainer => {
      if ( maintainer.name === currentUser ) {
        authorized = true;
      }
    } );

    if ( !authorized ) {
      printLn.error(
        'You\'re not listed as a maintainer in npm. ' +
        'Talk to a node-ledgable coworker for assistance.'
      );
      process.exit( 1 );
    }
  } ).catch( err => {
    if ( ( /ENEEDAUTH/ ).test( err ) ) {
      printLn.error(
        'You\'re not logged into npm. You need to authorize ' +
        'this machine using `npm login`.'
      );
      process.exit( 1 );
    }
    console.error( err );
    process.exit( 1 );
  } );
}

module.exports = checkAuth;
