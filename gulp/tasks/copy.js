'use strict';

const browserSync = require( 'browser-sync' );
const configCopy = require( '../config' ).copy;
const gulp = require( 'gulp' );
const gulpChanged = require( 'gulp-changed' );
const gulpTap = require( 'gulp-tap' );
const gulpRename = require( 'gulp-rename' );
const handleErrors = require( '../utils/handleErrors' );
const path = require( 'path' );

let fileName;

// NOTE: Replaced arrow functions, `() => {}`, for standard function
// declaration due to return being necessary for the generation of large
// numbers of files

gulp.task( 'copy:files', function() {
  return gulp.src( configCopy.files.src )
    .pipe( gulpChanged( configCopy.files.dest ) )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( configCopy.files.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( 'copy:icons', function() {
  return gulp.src( configCopy.icons.src )
    .pipe( gulpChanged( configCopy.icons.destStatic ) )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( configCopy.icons.destIncludes ) )
    .pipe( gulp.dest( configCopy.icons.destStatic ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( 'copy:vendorjs', function() {
  return gulp.src( configCopy.vendorjs.src )
    .pipe( gulpChanged( configCopy.vendorjs.dest ) )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( configCopy.vendorjs.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( 'copy:usage', function() {
  return gulp.src( configCopy.usage.src )
    .pipe( gulpChanged( configCopy.usage.dest ) )
    .pipe( gulpTap( ( file, t ) => {
      fileName = path.dirname( file.path )
        .split( path.sep )
        .pop();
    } ) )
    .pipe( gulpRename( path => {
      path.basename = fileName;
      path.extname = '.md';
    } ) )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( configCopy.usage.dest ) )
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
