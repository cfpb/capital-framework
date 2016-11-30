'use strict';

var gulp = require( 'gulp' );
var plugins = require( 'gulp-load-plugins' )();

/**
 * Generic lint a script source.
 * @param {string} src The path to the source JavaScript.
 * @returns {Object} An output stream from gulp.
 */
function _genericLint( src ) {
  return gulp.src( src, { base: './' } )
    .pipe( plugins.eslint() )
    .pipe( plugins.eslint.format() );
}

/**
 * Lints the gulpfile for errors.
 */
gulp.task( 'lint:build', function() {
  return _genericLint( [
    'gulpfile.js',
    'gulp/**/*.js'
  ] );
} );

/**
 * Lints the test js files for errors.
 */
gulp.task( 'lint:tests', function() {
  return _genericLint( [
    'test/accessibility/*.js',
    'test/*.js'
  ] );
} );

/**
 * Lints the source js files for errors.
 */
gulp.task( 'lint:scripts', function() {
  return _genericLint( [ 'src/**/src/*.js' ] );
} );

/**
 * Lints all the js files for errors
 */
gulp.task( 'lint', [
  'lint:build',
  'lint:tests',
  'lint:scripts'
] );
