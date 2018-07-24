const envvars = require( '../../../../config/environment' ).envvars;
const options = require( './getArgs' );
const printLn = require( './print' );
const Promise = require( 'bluebird' );
const readline = require( 'readline' );

/**
 * Confirm that the user wants to publish the components to NPM.
 * @param {Object} opts Options passed to the function.
 * @returns {Function} The user's reply to the prompt.
 */
function confirm( opts ) {
  opts = opts || {};
  const prompt = opts.prompt + ' [Y/n] ';
  return new Promise( ( resolve, reject ) => {

    /* If the silent or dryrun option is passed or we're in a CI,
       don't prompt the user. */
    if ( options.silent ||
         options.dryrun ||
         envvars.CONTINUOUS_INTEGRATION
    ) {
      resolve( opts.data );
      return;
    }

    const rl = readline.createInterface( {
      input:  process.stdin,
      output: process.stdout
    } );

    rl.question( prompt, answer => {
      if ( !answer || ( /^y$|^yes$/ ).test( answer.trim().toLowerCase() ) ) {
        printLn.info( opts.yes );
        resolve( opts.data );
      } else {
        reject( opts.no );
      }
      rl.close();
    } );

    rl.on( 'SIGINT', () => {
      printLn.error( 'ABORT EVERYTHING.' );
      process.exit( 1 );
    } );


  } );
}

module.exports = confirm;
