'use strict';

const gulp = require( 'gulp' );
const gulpEslint = require( 'gulp-eslint' );
const minimist = require( 'minimist' );

/**
 * Generic lint a script source.
 * @param {string} src The path to the source JavaScript.
 * @returns {Object} An output stream from gulp.
 */
function _genericLint( src ) {
  // Pass all command line flags to EsLint.
  const options = minimist( process.argv.slice( 2 ) );

  return gulp.src( src.concat( '!**/node_modules/**' ), { base: './' } )
    .pipe( gulpEslint( options ) )
    .pipe( gulpEslint.format() )
    .pipe( gulp.dest( './' ) );
}

/**
 * Lints the gulpfile for errors.
 */
gulp.task( 'lint:build', () => {
  _genericLint( [
    'gulpfile.js',
    'gulp/**/*.js'
  ] );
} );

/**
 * Lints the test js files for errors.
 */
gulp.task( 'lint:tests', () => {
  _genericLint( [
    'test/accessibility/*.js',
    'test/*.js'
  ] );
} );

/**
 * Lints the source js files for errors.
 */
gulp.task( 'lint:scripts', () => {
  _genericLint( [ 'src/**/src/*.js' ] );
} );

/**
 * Lints all the js files for errors
 */
gulp.task( 'lint', [
  'lint:build',
  'lint:tests',
  'lint:scripts'
] );
