'use strict';

const component = require('./parseComponentName');
const gulp = require('gulp');
const gulpQunit = require('gulp-qunit');

gulp.task( 'test', () => {
  return gulp.src('./test/' + (component || '*') + '.html')
  	.pipe(gulpQunit({timeout: 20}));
} );
