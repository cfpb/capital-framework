'use strict';

global.$ = require( 'jquery' );

const cfExpandables = require( 'cf-expandables/src/Expandable' );
const cfTables = require( 'cf-tables/src/Table' );

cfExpandables.init();
cfTables.init();

if ( $( '.cf-download' ).length ) {
  $.get( 'https://npmcdn.com/capital-framework/package.json', data => {
    const v = data.version;
    if ( ( !/\d+\.\d+\.\d+/ ).test( v ) ) return;
    $( '.cf-download' ).attr( 'href', 'http://registry.npmjs.org/capital-framework/-/capital-framework-' + v + '.tgz' );
  } );
}
