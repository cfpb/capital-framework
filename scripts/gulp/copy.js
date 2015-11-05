'use strict';

var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();

gulp.task( 'copy:components:boilerplate', function() {
  return gulp.src('./tmp/cf-*')
    .pipe($.foreach(function(stream, file) {
      gulp.src( './scripts/templates/component-boilerplate/*' )
          .pipe( gulp.dest(file.path) );
      return stream;
    }))
} );

gulp.task( 'copy:components:source', function() {
  return gulp.src('./components/*')
    // .pipe($.debug())
    .pipe($.foreach(function(stream, file) {
      var component = file.path.split('/').pop();
      gulp.src( [file.path + '/**', '!' + file.path + '/node_modules', '!' + file.path + '/npm-*'] )
          .pipe( gulp.dest('./tmp/' + component) );
      return stream;
    }))
} );
