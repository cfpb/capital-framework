'use strict';

var gulp = require( 'gulp' );
var fs = require('fs');
var $ = require( 'gulp-load-plugins' )();
var component = require('./parseComponentName');
var merge = require('deepmerge');
var baseManifest = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

gulp.task( 'copy:components:boilerplate', function() {
  return gulp.src('./components/' + (component || '*'))
    .pipe($.foreach(function(stream, file) {
      var component = file.path.split('/').pop();
      gulp.src( './scripts/templates/component-boilerplate/*' )
          .pipe( gulp.dest('./tmp/' + component) );
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
                  '!' + file.path + '/package.json',
                  '!' + file.path + '/node_modules',
                  '!' + file.path + '/node_modules/**',
                  '!' + file.path + '/npm-*'
                ];
      gulp.src( src )
          .pipe( gulp.dest('./tmp/' + component) );
      return stream;
    }))
} );

gulp.task( 'copy:components:manifest', function() {
  return gulp.src('./components/' + (component || '*') + '/package.json')
    .pipe($.data(function(file) {
      var manifest = merge(baseManifest, JSON.parse(String(file.contents)));
      delete manifest.scripts;
      delete manifest.devDependencies;
      file.contents = new Buffer(JSON.stringify(manifest));
    }))
    .pipe($.rename(function(path) {
      path.dirname = component || path.dirname;
    }))
    .pipe($.jsonFormat(2))
    .pipe(gulp.dest('./tmp'));
} );
