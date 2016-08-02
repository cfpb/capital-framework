'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var component = require('./parseComponentName');

gulp.task( 'test', function() {
  return gulp.src('./test/' + (component || '*') + '.html')
  	.pipe(plugins.qunit({timeout: 20}));
} );
