'use strict';

var path = require( 'path' );
var fs = require( 'fs' );
var componentsDir = path.join( __dirname, '..', '..', '..', 'components' );
var components = getDirectories( componentsDir );
var exec = require( 'child-process-promise' ).exec;

function getDirectories( srcpath ) {
  return fs.readdirSync( srcpath ).filter( function( file ) {
    return fs.statSync( path.join( srcpath, file ) ).isDirectory();
  } );
}

function npmLink( component ) {
  exec( 'npm unlink ' + component + ' && npm install ' + component,
    function( err, out ) {
      if ( err instanceof Error ) {
        throw err;
      }

      process.stdout.write( out );
    } );
}

for ( var i = 0, l = components.length; i < l; i++ ) {
  npmLink( components[i] );
}
