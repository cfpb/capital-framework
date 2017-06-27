'use strict';

const component = require( './parseComponentName' );
const gulp = require( 'gulp' );
const gulpIgnore = require( 'gulp-ignore' );
const gulpRename = require( 'gulp-rename' );
const gulpUglify = require( 'gulp-uglify' );
const gulpWebpack = require( 'gulp-webpack' );
const named = require('vinyl-named');

// Compile the master capital-framework.less file.
gulp.task( 'scripts:cf', () => {
  return gulp.src('./src/capital-framework.js')
    .pipe(gulpWebpack())
    .pipe(gulpRename({
      basename: 'capital-framework'
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(gulpUglify())
    .pipe(gulpRename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'));
} );

// Compile all the individual component files so that users can `npm install`
// a single component if they desire.
gulp.task( 'scripts:components', () => {
  var tmp = {};
  return gulp.src('./src/' + (component || '*') + '/src/*.js')
    .pipe(gulpIgnore.exclude( (vf) => {
      // Exclude JS files that don't share the same name as the directory
      // they're in. This filters out utility files.
      var matches = vf.path.match(/\/([\w-]*)\/src\/([\w-]*)\.js/);
      return matches[1] !== matches[2];
    } ))
    .pipe(named())
    .pipe(gulpRename( (path) => {
      tmp[path.basename] = path;
    } ))
    .pipe(gulpWebpack({
      output: {
        filename : '[name].js'
      }
    }))
    .pipe(gulpRename( (path) => {
      path.dirname = tmp[path.basename].dirname.replace('/src', '');
    } ))
    .pipe(gulp.dest('./tmp'))
    .pipe(gulpUglify())
    .pipe(gulpRename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./tmp'));
} );
