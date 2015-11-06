'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    importPlugin = require('less-plugin-npm-import'),
    component = require('./parseComponentName');

// Compile the master capital-framework.less file.
gulp.task( 'styles:cf', function() {
  return gulp.src('./capital-framework.less')
    .pipe($.less({
      plugins: [new importPlugin({prefix: '../node_modules/'})]
    }))
    .pipe(gulp.dest('./dist'))
    .pipe($.cssmin())
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'));
} );

// Compile all the individual component files so that users can `npm install`
// a single component if they desire.
gulp.task( 'styles:components', function() {
  return gulp.src('./components/' + (component || '*') + '/src/*.less')
    .pipe($.ignore.exclude(function(vf) {
      // Exclude Less files that don't share the same name as the directory
      // they're in. This filters out things like cf-vars.less but still
      // includes cf-core.less.
      var matches = vf.path.match(/\/([\w-]*)\/src\/([\w-]*)\.less/);
      return matches[1] !== matches[2];
    }))
    .pipe($.less({
      plugins: [new importPlugin({prefix: '../node_modules/'})]
    }))
    .pipe($.rename(function (path) {
      path.dirname = component || path.dirname;
      path.dirname = path.dirname.replace('/src','');
    }))
    .pipe(gulp.dest('./tmp'))
    .pipe($.cssmin())
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./tmp'));
} );
