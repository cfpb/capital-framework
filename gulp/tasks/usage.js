'use strict';

var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();
var config = require( '../config' ).usage;
var handleErrors = require( '../utils/handleErrors' );
var path = require( 'path' );
var fileName;

// this task takes the usage.md files from the cf-components directory
// and converts it from markdown to html so that it can be included in
// our Jekyll templates
gulp.task( 'usage', function() {
  return gulp.src( config.files.src )
    .on( 'error', handleErrors )
    .pipe( $.markdown() )
    .pipe( $.tap( function ( file, t ) {
      fileName = path.dirname( file.path )
        .split( path.sep )
        .pop();
    }))
    .pipe($.rename(function (path) {
      path.basename = fileName;
    }))
    .pipe( gulp.dest( config.files.dest ) )
} );
