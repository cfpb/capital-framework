const gulp = require( 'gulp' );

gulp.task( 'build',
  gulp.series(
    gulp.parallel(
      'styles:cf',
      'scripts:cf'
    ),
    'clean:tmp',
    'template:readmes',
    'copy:components:boilerplate',
    'copy:components:source',
    'template:usage',
    'copy:components:manifest',
    gulp.parallel(
      'styles:components',
      'scripts:components',
      'styles:grid'
    )
  )
);
