'use strict';

const browserSync = require( 'browser-sync' );
const configBanner = require( '../config' ).banner;
const configPkg = require( '../config' ).pkg;
const configScripts = require( '../config' ).scripts;
const environment = require( '../../config/environment' );
const gulp = require( 'gulp' );
const gulpRename = require( 'gulp-rename' );
const gulpSourcemaps = require( 'gulp-sourcemaps' );
const gulpHeader = require( 'gulp-header' );
const handleErrors = require( '../utils/handleErrors' );
const webpack = require( 'webpack' );
const webpackStream = require( 'webpack-stream' );

gulp.task( 'scripts', () => {
  gulp.src( configScripts.src )
    .pipe( gulpSourcemaps.init() )
    .pipe( webpackStream( {
      module: {
        rules: [ {
          use: [ {
            loader: 'babel-loader?cacheDirectory=true',
            options: {
              presets: [ [ 'env', {
                targets: {
                  browsers: environment.getSupportedBrowserList( 'js' )
                },
                debug: true
              } ] ]
            }
          } ]
        } ]
      },
      output: {
        filename: '[name].js'
      },
      plugins: [
        // Change warnings flag to true to view linter-style warnings.
        new webpack.optimize.UglifyJsPlugin( {
          uglifyOptions: {
            ie8: true,
            ecma: 8,
            warnings: false
          }, compress: {
            warnings: false
          }
        } )
      ]
    }, webpack ) )
    .on( 'error', handleErrors )
    .pipe( gulpHeader( configBanner, { pkg: configPkg } ) )
    .pipe( gulpRename( {
      suffix: '.min'
    } ) )
    .pipe( gulpSourcemaps.write( '.' ) )
    .pipe( gulp.dest( configScripts.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );
