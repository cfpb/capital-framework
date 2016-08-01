'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var component = require('./parseComponentName');

/**
 * Compile the master capital-framework.less file.
 * @returns {PassThrough} A source stream.
 */
function stylesCf() {
  return gulp.src('./src/capital-framework-with-grid.less')
    .pipe(plugins.less({
      paths: ['node_modules/cf-*/src/']
    }))
    .pipe( plugins.autoprefixer( {
      browsers: [ 'last 2 version',
                  'not ie < 7',
                  'android 4',
                  'BlackBerry 7',
                  'BlackBerry 10' ]
    } ) )
    .pipe(plugins.rename({
      basename: 'capital-framework'
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(plugins.cssmin())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'));
}

/**
 * Compile all the individual component files so that users can `npm install`
 * a single component if they desire.
 * @returns {PassThrough} A source stream.
 */
function stylesComponents() {
  return gulp.src('./src/' + (component || '*') + '/src/*.less')
    .pipe(plugins.ignore.exclude(function(vf) {
      // Exclude Less files that don't share the same name as the directory
      // they're in. This filters out things like cf-vars.less but still
      // includes cf-core.less.
      var matches = vf.path.match(/\/([\w-]*)\/src\/([\w-]*)\.less/);
      // We also exclude cf-grid. It needs its own special task. See below.
      return matches[2] === 'cf-grid' || matches[1] !== matches[2];
    }))
    .pipe(plugins.less({
      paths: ['node_modules/cf-*/src/']
    }))
    .pipe( plugins.autoprefixer( {
      browsers: [ 'last 2 version',
                  'not ie < 7',
                  'android 4',
                  'BlackBerry 7',
                  'BlackBerry 10' ]
    } ) )
    .pipe(plugins.rename(function (path) {
      path.dirname = component || path.dirname;
      path.dirname = path.dirname.replace('/src','');
    }))
    .pipe(gulp.dest('./tmp'))
    .pipe(plugins.cssmin())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./tmp'));
}

/**
 * cf-grid needs to compile cf-grid-generated.less.
 * @returns {PassThrough} A source stream.
 */
function stylesGrid() {
  return gulp.src('./src/cf-grid/src-generated/*.less')
    .pipe(plugins.less({
      paths: ['node_modules/cf-*/src/']
    }))
    .pipe( plugins.autoprefixer( {
      browsers: [ 'last 2 version',
                  'not ie < 7',
                  'android 4',
                  'BlackBerry 7',
                  'BlackBerry 10' ]
    } ) )
    .pipe(plugins.rename({
      basename: 'cf-grid'
    }))
    .pipe(gulp.dest('./tmp/cf-grid'))
    .pipe(plugins.cssmin())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./tmp/cf-grid'));
}

gulp.task( 'styles:cf', stylesCf );
gulp.task( 'styles:components', stylesComponents );
gulp.task( 'styles:grid', stylesGrid );

gulp.task( 'styles', [
  'styles:cf'
] );
