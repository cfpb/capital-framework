'use strict';

var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();
var component = require('./parseComponentName');

gulp.task('clean:tmp', function() {
  return gulp.src('./tmp/' + (component || ''), { read: false })
    .pipe($.rimraf());
});
