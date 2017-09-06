'use strict';

const browserSync = require( 'browser-sync' );
const configBanner = require( '../config' ).banner;
const configPkg = require( '../config' ).pkg;
const configStyles = require( '../config' ).styles;
const environment = require( '../../config/environment' );
const gulp = require( 'gulp' );
const gulpAutoprefixer = require( 'gulp-autoprefixer' );
const gulpCssmin = require( 'gulp-cssmin' );
const gulpHeader = require( 'gulp-header' );
const gulpLess = require( 'gulp-less' );
const gulpRename = require( 'gulp-rename' );
const gulpReplace = require( 'gulp-replace' );
const gulpSourcemaps = require( 'gulp-sourcemaps' );
const mqr = require( 'gulp-mq-remove' );
const handleErrors = require( '../utils/handleErrors' );


gulp.task( 'styles:modern', () => {
  gulp.src( configStyles.cwd + configStyles.src )
    .pipe( gulpSourcemaps.init() )
    .pipe( gulpLess( configStyles.settings ) )
    .on( 'error', handleErrors )
    .pipe( gulpAutoprefixer( {
      browsers: environment.getSupportedBrowserList( 'css' )
    } ) )
    .pipe( gulpHeader( configBanner, { pkg: configPkg } ) )
    .pipe( gulpRename( {
      suffix: '.min'
    } ) )
    .pipe( gulpSourcemaps.write( '.' ) )
    .pipe( gulp.dest( configStyles.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( 'styles:ie', () => {
  gulp.src( configStyles.cwd + configStyles.src )
    .pipe( gulpLess( configStyles.settings ) )
    .on( 'error', handleErrors )
    .pipe( gulpReplace(
      /url\('chosen-sprite.png'\)/ig,
      'url("/static/img/chosen-sprite.png")'
    ) )
    .pipe( gulpReplace(
      /url\('chosen-sprite@2x.png'\)/ig,
      'url("/static/img/chosen-sprite@2x.png")'
    ) )
    .pipe( gulpAutoprefixer( {
      browsers: [ 'IE 7', 'IE 8' ]
    } ) )
    .pipe( mqr( {
      width: '75em'
    } ) )
    .pipe( gulpCssmin() )
    .pipe( gulpRename( {
      suffix:  '.ie',
      extname: '.css'
    } ) )
    .pipe( gulp.dest( configStyles.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( 'styles', [
  'styles:modern',
  'styles:ie'
] );
