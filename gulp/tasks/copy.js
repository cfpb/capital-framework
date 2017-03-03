'use strict';

var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();
var config = require( '../config' ).copy;
var handleErrors = require( '../utils/handleErrors' );
var browserSync = require( 'browser-sync' );
var path = require( 'path' );
var fileName;

gulp.task( 'copy:files', function() {
  return gulp.src( config.files.src )
    .pipe( $.changed( config.files.dest ) )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( config.files.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( 'copy:icons', function() {
  return gulp.src( config.icons.src )
    .pipe( $.changed( config.icons.dest ) )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( config.icons.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( 'copy:vendorjs', function() {
  return gulp.src( config.vendorjs.src )
    .pipe( $.changed( config.vendorjs.dest ) )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( config.vendorjs.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( 'copy:usage', function() {
  return gulp.src( config.usage.src )
    .pipe( $.changed( config.usage.dest ) )
    .pipe( $.tap( function ( file, t ) {
      fileName = path.dirname( file.path )
        .split( path.sep )
        .pop();
    } ) )
    .pipe( $.rename( function ( path ) {
      path.basename = fileName;
      path.extname = '.md'
    } ) )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( config.usage.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( 'copy',
  [
    'copy:files',
    'copy:icons',
    'copy:vendorjs',
    'copy:usage'
  ]
);
