'use strict';

const component = require('./parseComponentName');
const environment = require( '../../config/environment' );
const gulp = require('gulp');
const gulpAutoprefixer = require( 'gulp-autoprefixer' );
const gulpCssmin = require( 'gulp-cssmin' );
const gulpIgnore = require( 'gulp-ignore' );
const gulpLess = require( 'gulp-less' );
const gulpRename = require( 'gulp-rename' );

/**
 * Compile the master capital-framework.less file.
 * @returns {PassThrough} A source stream.
 */
function stylesCf() {
  return gulp.src('./src/capital-framework-with-grid.less')
    .pipe(gulpLess({
      paths: ['node_modules/cf-*/src/']
    }))
    .pipe( gulpAutoprefixer( {
      browsers: environment.getSupportedBrowserList( 'css' )
    } ) )
    .pipe(gulpCssmin())
    .pipe(gulpRename({
      basename: 'capital-framework',
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./dist'))
}

/**
 * Compile all the individual component files so that users can `npm install`
 * a single component if they desire.
 * @returns {PassThrough} A source stream.
 */
function stylesComponents() {
  return gulp.src('./src/' + (component || '*') + '/src/*.less')
    .pipe(gulpIgnore.exclude( (vf) => {
      // Exclude Less files that don't share the same name as the directory
      // they're in. This filters out things like cf-vars.less but still
      // includes cf-core.less.
      var matches = vf.path.match(/\/([\w-]*)\/src\/([\w-]*)\.less/);
      // We also exclude cf-grid. It needs its own special task. See below.
      return matches[2] === 'cf-grid' || matches[1] !== matches[2];
    } ))
    .pipe( gulpLess({
      paths: ['node_modules/cf-*/src/']
    }))
    .pipe( gulpAutoprefixer( {
      browsers: environment.getSupportedBrowserList( 'css' )
    } ) )
    .pipe(gulpCssmin())
    .pipe(gulpRename( (path) => {
      path.dirname = component || path.dirname;
      path.dirname = path.dirname.replace('/src','');
      path.extname = '.min.css';
    } ))
    .pipe(gulp.dest('./tmp'))
}

/**
 * cf-grid needs to compile cf-grid-generated.less.
 * @returns {PassThrough} A source stream.
 */
function stylesGrid() {
  return gulp.src('./src/cf-grid/src-generated/*.less')
    .pipe(gulpLess({
      paths: ['node_modules/cf-*/src/']
    }))
    .pipe( gulpAutoprefixer( {
      browsers: environment.getSupportedBrowserList( 'css' )
    } ) )
    .pipe(gulpCssmin())
    .pipe(gulpRename({
      basename: 'cf-grid',
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./tmp/cf-grid'))
}

gulp.task( 'styles:cf', stylesCf );
gulp.task( 'styles:components', stylesComponents );
gulp.task( 'styles:grid', stylesGrid );

gulp.task( 'styles', [
  'styles:cf',
  'styles:components',
  'styles:grid'
] );
