'use strict';

const gulp = require( 'gulp' );

gulp.task( 'default',
  [
    'lint:scripts',
    'build'
  ]
);
