'use strict';

const configLint = require( '../config' ).lint;
const gulp = require( 'gulp' );
const gulpEslint = require( 'gulp-eslint' );
const handleErrors = require( '../utils/handleErrors' );

/**
 * Lints the gulpfile for errors
 */
gulp.task( 'lint:build', () => {
  gulp.src( configLint.gulp )
    .pipe( gulpEslint() )
    .pipe( gulpEslint.format() )
    .on( 'error', handleErrors );
} );

/**
 * Lints the source js files for errors
 */
gulp.task( 'lint:scripts', () => {
  gulp.src( configLint.src )
    .pipe( gulpEslint() )
    .pipe( gulpEslint.format() )
    .on( 'error', handleErrors );
} );

/**
 * Lints all the js files for errors
 */
gulp.task( 'lint', [
  'lint:build',
  'lint:scripts'
] );
