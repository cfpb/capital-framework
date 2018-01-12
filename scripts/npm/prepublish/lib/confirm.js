const Promise = require( 'bluebird' );
const readline = require( 'readline' );
const options = require( './getArgs' );
const printLn = require( './print' );

/**
 * Confirm that the user wants to publish the components to NPM.
 * @param {Object} opts Options passed to the function.
 * @returns {Function} The user's reply to the prompt.
 */
function confirm( opts ) {
  opts = opts || {};
  const prompt = opts.prompt + ' [Y/n] ';
  return new Promise( function( resolve, reject ) {

    /* If the silent or dryrun option is passed or we're in a CI,
       don't prompt the user. */
    if ( options.silent ||
         options.dryrun ||
         process.env.CONTINUOUS_INTEGRATION
    ) {
      return resolve( opts.data );
    }
    const rl = readline.createInterface( {
      input:  process.stdin,
      output: process.stdout
    } );
    rl.question( prompt, function( answer ) {
      if ( !answer || ( /^y$|^yes$/ ).test( answer.trim().toLowerCase() ) ) {
        printLn.info( opts.yes );
        resolve( opts.data );
      } else {
        reject( opts.no );
      }
      rl.close();
    } );
    rl.on( 'SIGINT', function() {
      printLn.error( 'OMG ABORT EVERYTHING.' );
      process.exit( 1 );
    } );
  } );
}

module.exports = confirm;
