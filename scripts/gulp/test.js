'use strict';

const component = require('./parseComponentName');
const gulp = require('gulp');
const gulpQunit = require('gulp-qunit');

//const configTest = require( '../config' ).tests;
const gulpIstanbul = require( 'gulp-istanbul' );
const gulpMocha = require( 'gulp-mocha' );

/**
 * Run Mocha JavaScript unit tests.
 * @param {Function} cb - Callback function to call on completion.
 */
function unitTest( cb ) {
  gulp.src( ['./src/**/*.js',
             '!./src/**/node_modules/**/*.js',
             '!./src/**/src/cf-*',
             '!./src/capital-framework.js'] )
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

// TODO: Add test commands to repo documentation.
gulp.task( 'test:unit', unitTest );

gulp.task( 'test', () => {
  return gulp.src( './test/' + ( component || '*' ) + '.html' )
  	.pipe( gulpQunit( { timeout: 20 } ) );
} );
