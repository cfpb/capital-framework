'use strict';

const gulp = require( 'gulp' );
const gulpEslint = require( 'gulp-eslint' );
const gulpStylelint = require( 'gulp-stylelint' );
const minimist = require( 'minimist' );

/**
 * Generic lint a script source.
 * @param {string} src The path to the source JavaScript.
 * @returns {Object} An output stream from gulp.
 */
function _genericLintJs( src ) {
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
  _genericLintJs( [
    'gulpfile.js',
    'gulp/**/*.js'
  ] );
} );

/**
 * Lints the test js files for errors.
 */
gulp.task( 'lint:tests', () => {
  _genericLintJs( [
    'test/accessibility/*.js',
    'test/*.js'
  ] );
} );

/**
 * Lints the source js files for errors.
 */
gulp.task( 'lint:scripts', () => {
  _genericLintJs( [ 'src/**/src/*.js' ] );
} );

/**
 * Lints the source LESS files for errors.
 */
gulp.task( 'lint:styles', () => {
  return gulp
    .src( ['!src/cf-grid/src-generated/*.less', 'src/**/*.less'] )
    .pipe( gulpStylelint( {
      reporters: [
        { formatter: 'string', console: true }
      ]
    } ) );
} );

/**
 * Lints the release js for errors.
 * TODO: After release files are tested, combine this task with the build one
 */
gulp.task( 'lint:release', () => {
  _genericLintJs( [
    'scripts/npm/prepublish/**/*.js'
  ] );
} );

/**
 * Lints all the js files for errors
 */
gulp.task( 'lint', [
  'lint:build',
  'lint:tests',
  'lint:scripts',
  'lint:styles',
  'lint:release'
] );
