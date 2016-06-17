'use strict';

// The following line imports jQuery into your project. If you don't need jQuery, delete it.
global.$ = require( 'jquery' );

// If you'd like to include cf-expandables (or any other node module in your project),
// run `npm install cf-expandables --save` and require() it in this file.
require( 'cf-expandables' );

if ( $('.cf-download').length ) {
  $.get('https://npmcdn.com/capital-framework/package.json', function( data ) {
    var v = data.version;
    if ( !/\d+\.\d+\.\d+/.test(v) ) return;
    $( '.cf-download' ).attr( 'href', 'http://registry.npmjs.org/capital-framework/-/capital-framework-' + v + '.tgz' );
  });
}
