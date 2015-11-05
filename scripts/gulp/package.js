'use strict';

var gulp = require( 'gulp' );

gulp.task( 'package:components',
  [
    'template:components',
    'copy:components:boilerplate',
    'copy:components:source',
    'styles:components'
  ]
);
