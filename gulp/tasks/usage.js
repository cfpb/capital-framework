'use strict';

var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();
var config = require( '../config' ).usage;
var handleErrors = require( '../utils/handleErrors' );
var markdownIt = require( 'markdown-it' );
var illuminate = require( 'illuminate-js' );
var path = require( 'path' );
var fileName;

// settings for markdown-it
var md = new markdownIt( {
  html: true,
  highlight: function (str, lang) {
    lang = lang || 'html';
    if ( lang && illuminate.getLanguage( lang ) ) {
      return illuminate.highlight( str, lang );
    }
    return '';
  }
} );

// transform  markdown to html
function markdownToHtml( file ) {
  var out = md.render( file.contents.toString() );
  file.contents = new Buffer( out );
  return;
}

/*
* take the usage.md files from the cf-components directory
* rename them and transform them to markdown
*/
gulp.task( 'usage', function() {
  return gulp.src( config.files.src )
    .on( 'error', handleErrors )
    .pipe( $.tap( markdownToHtml ) )
    .pipe( $.tap( function ( file, t ) {
      fileName = path.dirname( file.path )
        .split( path.sep )
        .pop();
    }))
    .pipe($.rename(function (path) {
      path.basename = fileName;
      path.extname = '.html'
    }))
    .pipe( gulp.dest( config.files.dest ) )
} );
