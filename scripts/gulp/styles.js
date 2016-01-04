'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    component = require('./parseComponentName');

// Compile the master capital-framework.less file.
gulp.task( 'styles:cf', function() {
  return gulp.src('./src/capital-framework-with-grid.less')
    .pipe($.less({
      paths: ['node_modules/cf-*/src/']
    }))
    .pipe($.rename({
      basename: 'capital-framework'
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
  return gulp.src('./src/' + (component || '*') + '/src/*.less')
    .pipe($.ignore.exclude(function(vf) {
      // Exclude Less files that don't share the same name as the directory
      // they're in. This filters out things like cf-vars.less but still
      // includes cf-core.less.
      var matches = vf.path.match(/\/([\w-]*)\/src\/([\w-]*)\.less/);
      // We also exclude cf-grid. It needs its own special task. See below.
      return matches[2] === 'cf-grid' || matches[1] !== matches[2];
    }))
    .pipe($.less({
      paths: ['node_modules/cf-*/src/']
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

// cf-grid needs to compile cf-grid-generated.less
gulp.task( 'styles:grid', function() {
  return gulp.src('./src/cf-grid/src-generated/*.less')
    .pipe($.less({
      paths: ['node_modules/cf-*/src/']
    }))
    .pipe($.rename({
      basename: 'cf-grid'
    }))
    .pipe(gulp.dest('./tmp/cf-grid'))
    .pipe($.cssmin())
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./tmp/cf-grid'));
} );
