'use strict';

const browserSync = require( 'browser-sync' );
const gulp = require( 'gulp' );
const util = require( 'gulp-util' );

gulp.task( 'browserSync', () => {
  var port = util.env.port || '4000';
  browserSync.init( {
    proxy: 'localhost:' + port
  } );
} );
