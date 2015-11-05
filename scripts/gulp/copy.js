'use strict';

var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();

/**
 * Generic copy files flow from source to destination.
 * @param {string} src The path to the source files.
 * @param {string} dest The path to destination.
 * @returns {Object} An output stream from gulp.
 */
function _genericCopy( src, dest ) {
  return gulp.src( src )
    .pipe( gulp.dest( dest ) );
}

gulp.task( 'copy:components', function() {
  return _genericCopy( './components/', './tmp' );
} );
