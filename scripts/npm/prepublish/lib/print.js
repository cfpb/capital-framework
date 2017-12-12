'use strict';

var logSymbols = require( 'log-symbols' );
var chalk = require( 'chalk' );
var indentString = require( 'indent-string' );
var options = require( './getArgs' );

function printMsg( type, msg, indent ) {
  return console.log(
    indentString( logSymbols[type] + ' ' + msg, ' ', indent ? 4 : 2 )
  );
}

var printLn = {};

[ 'success', 'warning', 'error', 'info' ].forEach( function( type ) {
  printLn[type] = function( msg, indent ) {
    options.silent ? function() {} : printMsg( type, msg, indent );
  };
} );

printLn.console = function( msg ) {
  options.silent ? function() {} :
  console.log( chalk.dim( indentString( msg, ' ', 8 ) ) );
};

module.exports = printLn;
