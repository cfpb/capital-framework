'use strict';

var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();

gulp.task('template:components', function() {
  return gulp.src('./components/*/package.json')
    .pipe($.data(function(file) {
      var content = String(file.contents);
      return JSON.parse(content);
    }))
    .pipe($.applyTemplate({
      engine: 'lodash',
      template: './scripts/templates/README.md.tmpl',
      props: ['contents', 'data'],
      context: function (file) {
        return file.data;
      }
    }))
    .pipe($.rename(function(path) {
      path.basename = "README";
      path.extname = ".md"
    }))
    .pipe(gulp.dest('tmp'));
});
