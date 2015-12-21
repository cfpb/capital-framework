'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    component = require('./parseComponentName');

gulp.task( 'test', function() {
    return gulp.src('./test/' + (component || '*') + '.html')
        .pipe($.qunit({timeout: 20}));
} );
