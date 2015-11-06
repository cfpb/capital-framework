'use strict';

var gulp = require( 'gulp' );
var runSequence = require('run-sequence');

gulp.task('build', function(callback) {
  runSequence(
    'clean:tmp',
    ['template:readmes', 'copy:components:boilerplate'],
    ['copy:components:source', 'template:usage'],
    ['styles:components', 'scripts:components']
  );
});
