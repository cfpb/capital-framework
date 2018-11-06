const logSymbols = require( 'log-symbols' );
const chalk = require( 'chalk' );
const indentString = require( 'indent-string' );
const options = require( './getArgs' );

/**
 * Print a message to the console.
 * @param {string} type The type of message to print.
 * @param {string} msg The message to print.
 * @param {number} indent The number of spaces to indent the message.
 * @returns {Function} The command to print the message to the console.
 */
function printMsg( type, msg, indent ) {
  return console.log(
    indentString( logSymbols[type] + ' ' + msg, indent ? 4 : 2 )
  );
}

const printLn = {};

[ 'success', 'warning', 'error', 'info' ].forEach( function( type ) {
  printLn[type] = function( msg, indent ) {
    if ( !options.silent ) {
      printMsg( type, msg, indent );
    }
  };
} );

printLn.console = function( msg ) {
  if ( !options.silent ) {
    console.log( chalk.dim( indentString( msg, 8 ) ) );
  }
};

module.exports = printLn;
