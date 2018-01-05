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
 * @returns {Object} An output stream from gulp.
 */
function lintBuild() {
  return _genericLintJs( [
    'gulpfile.js',
    'gulp/**/*.js'
  ] );
};

/**
 * Lints the test js files for errors.
 * @returns {Object} An output stream from gulp.
 */
function lintTests() {
  return _genericLintJs( [
    'test/accessibility/*.js',
    'test/*.js'
  ] );
};

/**
 * Lints the source js files for errors.
 * @returns {Object} An output stream from gulp.
 */
function lintScripts() {
  return _genericLintJs( [ 'src/**/src/*.js' ] );
};

/**
 * Lints the release js for errors.
 * TODO: After release files are tested, combine this task with the build one
 * @returns {Object} An output stream from gulp.
 */
function lintRelease() {
  return _genericLintJs( [
    'scripts/npm/prepublish/**/*.js'
  ] );
};


/**
 * Lints the source LESS files for errors.
 * @returns {Object} An output stream from gulp.
 */
function lintStyles(){
  return gulp.src( ['!src/cf-grid/src-generated/*.less', 'src/**/*.less'] )
    .pipe( gulpStylelint( {
      reporters: [
        { formatter: 'string', console: true }
      ]
    } ) );
};

gulp.task( 'lint:build', lintBuild );
gulp.task( 'lint:tests', lintTests );
gulp.task( 'lint:scripts', lintScripts );
gulp.task( 'lint:release', lintRelease );
gulp.task( 'lint:styles', lintStyles );

/**
 * Lints all the js files for errors
 */
gulp.task( 'lint', [
  'lint:build',
  'lint:tests',
  'lint:scripts',
  'lint:release',
  'lint:styles'
] );
