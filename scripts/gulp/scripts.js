const BROWSER_LIST = require( '../../config/browser-list-config' );
const component = require( './parseComponentName' );
const gulp = require( 'gulp' );
const gulpIgnore = require( 'gulp-ignore' );
const gulpRename = require( 'gulp-rename' );
const UglifyWebpackPlugin = require( 'uglifyjs-webpack-plugin' );
const vinylNamed = require( 'vinyl-named' );
const webpack = require( 'webpack' );
const webpackConfig = require( '../../config/webpack-config.js' );
const webpackStream = require( 'webpack-stream' );

/* TODO: Add a webpack-config file to handle sharing of redundant webpack
   configurations. Also, add a production and dev flag to generate
   a minified and un-minified version of the assets. */

/**
 * Compile the master capital-framework.less file.
 * @returns {Object} An output stream from gulp.
 */
function scriptsCf() {
  return gulp.src( './src/capital-framework.js' )
    .pipe( webpackStream( webpackConfig, webpack ) )
    .pipe( gulpRename( {
      basename: 'capital-framework',
      extname: '.min.js'
    } ) )
    .pipe( gulp.dest( './dist' ) );
}

/**
 * Compile all the individual component files so that users can `npm install`
 * a single component if they desire.
 * @returns {Object} An output stream from gulp.
 */
function scriptsComponents() {
  const tmp = {};
  return gulp.src( './src/' + ( component || '*' ) + '/src/*.js' )
    .pipe( gulpIgnore.exclude( vf => {
      /* Exclude JS files that don't share the same name as the directory
         they're in. This filters out utility files. */
      const matches = vf.path.match( /\/([\w-]*)\/src\/([\w-]*)\.js/ );
      return matches[1] !== matches[2];
    } ) )
    .pipe( vinylNamed() )
    .pipe( gulpRename( path => {
      tmp[path.basename] = path;
    } ) )
    .pipe( webpackStream( webpackConfig, webpack ) )
    .pipe( gulpRename( path => {
      path.dirname = tmp[path.basename].dirname.replace( '/src', '' );
      path.extname = '.min.js';
    } ) )
    .pipe( gulp.dest( './tmp' ) );
}

gulp.task( 'scripts:cf', scriptsCf );
gulp.task( 'scripts:components', scriptsComponents );

gulp.task( 'scripts', gulp.parallel(
  'scripts:cf',
  'scripts:components'
) );
