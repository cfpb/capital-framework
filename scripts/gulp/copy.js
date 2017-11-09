'use strict';

const component = require( './parseComponentName' );
const deepmerge = require( 'deepmerge' );
const fs = require( 'fs' );
const gulp = require( 'gulp' );
const gulpData = require( 'gulp-data' );
const gulpForeach = require( 'gulp-foreach' );
const gulpJsonFormat = require( 'gulp-json-format' );
const gulpRename = require( 'gulp-rename' );

let baseManifest = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

gulp.task( 'copy:components:boilerplate', () => {
  gulp.src(['./src/' + (component || '*'), '!./src/*.js', '!./src/*.less'])
    .pipe(gulpForeach(function(stream, file) {
      var component = file.path.split('/').pop();
      gulp.src( './scripts/templates/component-boilerplate/*' )
          .pipe( gulp.dest('./tmp/' + component) );
      return stream;
    }))
} );

gulp.task( 'copy:components:source', () => {
  gulp.src(['./src/' + (component || '*'), '!./src/*.js', '!./src/*.less'])
    .pipe(gulpForeach(function(stream, file) {
      var component = file.path.split('/').pop(),
          src = [
                  file.path + '/**',
                  '!' + file.path + '/package.json',
                  '!' + file.path + '/node_modules',
                  '!' + file.path + '/node_modules/**',
                  '!' + file.path + '/npm-*'
                ];
      gulp.src( src )
          .pipe( gulp.dest('./tmp/' + component) );
      return stream;
    }))
} );

gulp.task( 'copy:components:manifest', () => {
  gulp.src('./src/' + (component || '*') + '/package.json')
    .pipe(gulpData(function(file) {
      // Remove any dependencies from CF's package.json,
      // we don't want components to have them.
      delete baseManifest.dependencies;
      var manifest = deepmerge(baseManifest, JSON.parse(String(file.contents)));
      // After the merge, remove any scripts and dev deps.
      delete manifest.scripts;
      delete manifest.devDependencies;
      file.contents = new Buffer(JSON.stringify(manifest));
    }))
    .pipe(gulpRename(function(path) {
      path.dirname = component || path.dirname;
    }))
    .pipe(gulpJsonFormat(2))
    .pipe(gulp.dest('./tmp'));
} );
