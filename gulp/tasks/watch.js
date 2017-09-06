'use strict';

/* Notes:
   - this task watches the source files for changes, then fires off the relevant task
   - gulp/tasks/browserSync.js reloads the browser with the compiled files
*/

const config = require( '../config' );
const gulp = require( 'gulp' );

gulp.task( 'watch', [ 'browserSync' ], () => {
  gulp.watch( config.scripts.src, [ 'scripts' ] );
  gulp.watch( config.styles.cwd + '/**/*.less', [ 'styles' ] );
  gulp.watch( config.images.src, [ 'images' ] );
  gulp.watch( config.copy.files.src, [ 'copy:files' ] );
  gulp.watch( config.copy.usage.src, [ 'copy:usage' ] );
} );
