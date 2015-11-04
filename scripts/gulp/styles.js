'use strict';

var gulp = require( 'gulp' ),
    $ = require( 'gulp-load-plugins' )(),
    importPlugin = require('less-plugin-npm-import');

gulp.task( 'styles:modern', function() {
  return gulp.src('./capital-framework.less')
    .pipe($.less({
      plugins: [new importPlugin({prefix: '../node_modules/'})]
    }))
    .pipe(gulp.dest('./'));
} );
