'use strict';

const component = require('./parseComponentName');
const gulp = require( 'gulp' );
const gulpRimraf = require( 'gulp-rimraf' );

gulp.task('clean:tmp', () => {
  gulp.src('./tmp/' + (component || ''), { read: false })
    .pipe(gulpRimraf());
});
