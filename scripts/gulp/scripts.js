'use strict';

const BROWSER_LIST = require( '../../config/browser-list-config' );
const component = require( './parseComponentName' );
const gulp = require( 'gulp' );
const gulpIgnore = require( 'gulp-ignore' );
const gulpRename = require( 'gulp-rename' );
const webpack = require( 'webpack' );
const webpackStream = require( 'webpack-stream' );
const UglifyWebpackPlugin = require( 'uglifyjs-webpack-plugin' );
const vinylNamed = require( 'vinyl-named' );

 // Set warnings to true to show linter-style warnings.
 // Set mangle to false and beautify to true to debug the output code.
const COMMON_UGLIFY_CONFIG = new UglifyWebpackPlugin( {
  parallel: true,
  uglifyOptions: {
    ie8: false,
    ecma: 5,
    warnings: false,
    mangle: true,
    output: {
      comments: false,
      beautify: false
    }
  }
} );

// TODO: Add a webpack-config file to handle sharing of redundant webpack
//       configurations. Also, add a production and dev flag to generate
//       a minified and un-minified version of the assets.

// Compile the master capital-framework.less file.
gulp.task( 'scripts:cf', () => {
  return gulp.src('./src/capital-framework.js')
    .pipe( webpackStream( {
      module: {
        rules: [ {
          use: [ {
            loader: 'babel-loader?cacheDirectory=true',
            options: {
              presets: [ [ 'env', {
                targets: {
                  browsers: BROWSER_LIST.LAST_2_PLUS_IE_9_AND_UP
                },
                debug: true
              } ] ]
            }
          } ]
        } ]
      },
      output: {
        filename: '[name].js'
      },
      plugins: [ COMMON_UGLIFY_CONFIG ]
    }, webpack ) )
    .pipe(gulpRename({
      basename: 'capital-framework',
      extname: '.min.js'
    } ) )
    .pipe( gulp.dest( './dist' ) );
} );

// Compile all the individual component files so that users can `npm install`
// a single component if they desire.
gulp.task( 'scripts:components', () => {
  let tmp = {};
  return gulp.src( './src/' + (component || '*') + '/src/*.js' )
    .pipe(gulpIgnore.exclude( (vf) => {
      // Exclude JS files that don't share the same name as the directory
      // they're in. This filters out utility files.
      var matches = vf.path.match( /\/([\w-]*)\/src\/([\w-]*)\.js/ );
      return matches[1] !== matches[2];
    } ) )
    .pipe(vinylNamed())
    .pipe(gulpRename( path => {
      tmp[path.basename] = path;
    } ) )
    .pipe( webpackStream( {
      module: {
        rules: [ {
          use: [ {
            loader: 'babel-loader?cacheDirectory=true',
            options: {
              presets: [ [ 'env', {
                targets: {
                  browsers: BROWSER_LIST.LAST_2_PLUS_IE_9_AND_UP
                },
                debug: true
              } ] ]
            }
          } ]
        } ]
      },
      output: {
        filename: '[name].js'
      },
      plugins: [ COMMON_UGLIFY_CONFIG ]
    }, webpack ) )
    .pipe( gulpRename( path => {
      path.dirname = tmp[path.basename].dirname.replace( '/src', '' );
      path.extname = '.min.js';
    } ) )
    .pipe( gulp.dest( './tmp' ) );
} );

gulp.task( 'scripts', [
  'scripts:cf',
  'scripts:components'
] );
