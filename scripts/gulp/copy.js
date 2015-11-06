'use strict';

var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();
var component = require('./parseComponentName');

gulp.task( 'copy:components:boilerplate', function() {
  return gulp.src('./tmp/' + (component || 'cf-*'))
    .pipe($.foreach(function(stream, file) {
      gulp.src( './scripts/templates/component-boilerplate/*' )
          .pipe( gulp.dest(file.path) );
      return stream;
    }))
} );

gulp.task( 'copy:components:source', function() {
  return gulp.src('./components/' + (component || '*'))
    .pipe($.foreach(function(stream, file) {
      var component = file.path.split('/').pop(),
          src = [
                  file.path + '/**',
                  '!' + file.path + '/usage.md',
                  '!' + file.path + '/node_modules/**',
                  '!' + file.path + '/npm-*'
                ];
      gulp.src( src )
          .pipe( gulp.dest('./tmp/' + component) );
      return stream;
    }))
} );
