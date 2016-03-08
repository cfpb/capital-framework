'use strict';

var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();
var config = require( '../config' ).usage;
var handleErrors = require( '../utils/handleErrors' );
var pygmentize = require('pygmentize-bundled');
var path = require( 'path' );
var fileName;

var markdownOptions = {
  gfm: true,
  sanitize: false,
  highlight: function (code, lang, callback) {
    pygmentize({ lang: 'html', format: 'html' }, code, function (err, result) {
      if (err) return callback(err);
      callback(null, result.toString());
    });
  }
};

// this task takes the usage.md files from the cf-components directory
// and converts it from markdown to html so that it can be included in
// our Jekyll templates
gulp.task( 'usage', function() {
  return gulp.src( config.files.src )
    .on( 'error', handleErrors )
    .pipe( $.markdown( markdownOptions ) )
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
