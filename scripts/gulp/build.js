'use strict';

const gulp = require( 'gulp' );
const runSequence = require( 'run-sequence' );

gulp.task('build', () => {
  runSequence(
    ['styles:cf', 'scripts:cf', 'clean:tmp'],
    ['template:readmes', 'copy:components:boilerplate'],
    ['copy:components:source', 'template:usage', 'copy:components:manifest'],
    ['styles:components', 'scripts:components', 'styles:grid']
  );
});
