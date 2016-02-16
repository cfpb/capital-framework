'use strict';

// The following line imports jQuery into your project. If you don't need jQuery, delete it.
global.$ = require( 'jquery' );

// If you'd like to include cf-expandables (or any other node module in your project),
// run `npm install cf-expandables --save` and require() it in this file.
require( 'cf-expandables' );

// Count all features included in the test page.
$( '.feature-list' ).append(
  '<section class="feature-list_item' +
  ' block block__padded-top block__border-top">' +
  '<div class="feature-header">' +
  '<h1 class="feature-header_name">jQuery</h1>' +
  '</div>' +
  '<p>jQuery is working and counts a total of ' +
  '<strong>' + $( '.feature-list_item' ).size() + '</strong> ' +
  'cf-components.</p>' +
  '</section>'
);
