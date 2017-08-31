'use strict';

const browserSync = require( 'browser-sync' );
const configImages = require( '../config' ).images;
const gulp = require( 'gulp' );
const gulpChanged = require( 'gulp-changed' );
const gulpImagemin = require( 'gulp-imagemin' );
const handleErrors = require( '../utils/handleErrors' );

gulp.task( 'images', () => {
  gulp.src( configImages.src )
    .pipe( gulpChanged( configImages.dest ) )
    .pipe( gulpImagemin() )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( configImages.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );
