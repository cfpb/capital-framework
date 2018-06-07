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
  // Pass all command line flags to ESLint.
  const options = minimist( process.argv.slice( 2 ) );

  return gulp.src( src.concat( '!**/node_modules/**' ), { base: './' } )
    .pipe( gulpEslint( options ) )
    .pipe( gulpEslint.format() )
    .pipe( gulp.dest( './' ) );
}

/**
 * Lints the gulpfile for errors.
 * @returns {Object} An output stream from gulp.
 */
function lintBuild() {
  return _genericLintJs( [
    'gulpfile.js',
    'scripts/gulp/**/*.js',
    'scripts/npm/prepublish/**/*.js'
  ] );
}

/**
 * Lints the test js files for errors.
 * @returns {Object} An output stream from gulp.
 */
function lintTests() {
  return _genericLintJs( [
    'test/**/*.js',
    '!test/lib/**/*.js',
    '!test/unit-test-coverage/**/*.js'
  ] );
}

/**
 * Lints the source js files for errors.
 * @returns {Object} An output stream from gulp.
 */
function lintScripts() {
  return _genericLintJs( [ 'src/**/src/*.js' ] );
}

/**
 * Lints the source LESS files for errors.
 * @returns {Object} An output stream from gulp.
 */
function lintStyles() {
  // Pass all command line flags to Stylelint.
  const options = minimist( process.argv.slice( 2 ) );
  const willFix = options.fix || false;
  return gulp.src( [
    'src/**/*.less',
    '!src/cf-*/node_modules/**/*.less',
    '!src/cf-grid/src-generated/*.less'
  ] )
    .pipe( gulpStylelint( {
      failAfterError: true,
      fix: willFix,
      reporters: [ { formatter: 'string', console: true } ]
    } ) )
    .pipe( gulp.dest( 'src' ) );
}

gulp.task( 'lint:build', lintBuild );
gulp.task( 'lint:tests', lintTests );
gulp.task( 'lint:scripts', lintScripts );
gulp.task( 'lint:styles', lintStyles );

/**
 * Lints all the js files for errors
 */
gulp.task( 'lint', gulp.parallel(
  'lint:build',
  'lint:tests',
  'lint:scripts',
  'lint:styles'
) );
