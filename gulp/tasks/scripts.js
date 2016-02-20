'use strict';

var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();
var pkg = require( '../config' ).pkg;
var banner = require( '../config' ).banner;
var config = require( '../config' ).scripts;
var handleErrors = require( '../utils/handleErrors' );
var browserSync = require( 'browser-sync' );

gulp.task( 'scripts', function() {
  return gulp.src( config.src )
    .pipe( $.sourcemaps.init() )
    .pipe( $.webpack( {
      output: {
        filename: '[name].js'
      }
    } ) )
    .pipe( $.uglify() )
    .on( 'error', handleErrors )
    .pipe( $.header( banner, { pkg: pkg } ) )
    .pipe( $.rename( {
      suffix: '.min'
    } ) )
    .pipe( $.sourcemaps.write( '.' ) )
    .pipe( gulp.dest( config.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );
