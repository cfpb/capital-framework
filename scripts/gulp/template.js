'use strict';

var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();
var component = require('./parseComponentName');

gulp.task('template:readmes', function() {
  var pkgs = './src/' + (component || '*') + '/package.json';
  return gulp.src(pkgs)
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
      path.dirname = component || path.dirname;
      path.basename = 'README';
      path.extname = '.md';
    }))
    .pipe(gulp.dest('tmp'));
});

gulp.task('template:usage', function () {
  return gulp.src('./src/' + (component || '*') + '/usage.md')
    .pipe($.markdown())
    .pipe($.data(function(file) {
      var content = String(file.contents),
          component = file.path.split('/');
      return {
        name: component[component.length - 2],
        body: content
      };
    }))
    .pipe($.applyTemplate({
      engine: 'lodash',
      template: './scripts/templates/preview.html.tmpl',
      props: ['contents', 'data'],
      context: function (file) {
        return file.data;
      }
    }))
    .pipe($.rename(function (path) {
      path.dirname = component || path.dirname;
    }))
    .pipe(gulp.dest('tmp'));
});
