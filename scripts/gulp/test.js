const component = require( './parseComponentName' );
const gulp = require( 'gulp' );
const gulpQunit = require( 'gulp-qunit' );

const gulpIstanbul = require( 'gulp-istanbul' );
const gulpMocha = require( 'gulp-mocha' );

/**
 * Test the JS components with qUnit
 * @param {Function} cb - Callback function to call on completion
 */
function testQUnit( cb ) {
  gulp.src( './test/' + ( component || '*' ) + '.html' )
    .pipe( gulpQunit( { timeout: 20 } ) )
    .on( 'finish', cb );
}

/**
 * Run Mocha JavaScript unit tests.
 * @param {Function} cb - Callback function to call on completion.
 */
function testUnit( cb ) {
  gulp.src( [ './src/**/*.js',
    '!./src/**/node_modules/**/*.js',
    '!./src/**/src/cf-*',
    '!./src/capital-framework.js' ] )
    .pipe( gulpIstanbul( {
      includeUntested: true
    } ) )
    .pipe( gulpIstanbul.hookRequire() )
    .on( 'finish', () => {
      gulp.src( 'test/unit-test/**/*.js' )
        .pipe( gulpMocha( {
          reporter: 'nyan'
        } ) )
        .pipe( gulpIstanbul.writeReports( {
          dir: 'test/unit-test-coverage'
        } ) )
        .on( 'end', cb );
    } );
}


/**
 * Run Mocha JavaScript build tests.
 * @param {Function} cb - Callback function to call on completion.
 */
function testBuild( cb ) {
  gulp.src( [ './scripts/npm/prepublish/lib/**/*.js' ] )
    .pipe( gulpIstanbul( {
      includeUntested: true
    } ) )
    .pipe( gulpIstanbul.hookRequire() )
    .on( 'finish', () => {
      gulp.src( 'test/build-test/**/*.js' )
        .pipe( gulpMocha( {
          reporter: 'nyan'
        } ) )
        .pipe( gulpIstanbul.writeReports( {
          dir: 'test/build-test-coverage'
        } ) )
        .on( 'end', cb );
    } );
}

// TODO: Add test commands to repo documentation.
gulp.task( 'test:qunit', testQUnit );
gulp.task( 'test:unit', testUnit );
gulp.task( 'test:build', testBuild );

gulp.task( 'test', gulp.series(
  'test:unit',
  'test:build',
  'test:qunit'
) );
