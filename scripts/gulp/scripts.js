'use strict';

var gulp = require('gulp'),
    named = require('vinyl-named'),
    $ = require('gulp-load-plugins')(),
    component = require('./parseComponentName');

// Compile the master capital-framework.less file.
gulp.task( 'scripts:cf', function() {
  return gulp.src('./src/capital-framework.js')
    .pipe($.webpack())
    .pipe($.rename({
      basename: 'capital-framework'
    }))
    .pipe(gulp.dest('./dist'))
    .pipe($.uglify())
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'));
} );

// Compile all the individual component files so that users can `npm install`
// a single component if they desire.
gulp.task( 'scripts:components', function() {
  var tmp = {};
  return gulp.src('./src/' + (component || '*') + '/src/*.js')
    .pipe($.ignore.exclude(function(vf) {
      // Exclude JS files that don't share the same name as the directory
      // they're in. This filters out utility files.
      var matches = vf.path.match(/\/([\w-]*)\/src\/([\w-]*)\.js/);
      return matches[1] !== matches[2];
    }))
    .pipe(named())
    .pipe($.rename(function (path) {
      tmp[path.basename] = path;
    }))
    .pipe($.webpack({
      output: {
        filename : '[name].js'    
      }
    }))
    .pipe($.rename(function (path) {
      path.dirname = tmp[path.basename].dirname.replace('/src', '');
    }))  
    .pipe(gulp.dest('./tmp'))
    .pipe($.uglify())
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./tmp'));
} );
