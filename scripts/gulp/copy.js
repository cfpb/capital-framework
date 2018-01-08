const parseComponentName = require( './parseComponentName' );
const deepmerge = require( 'deepmerge' );
const fs = require( 'fs' );
const gulp = require( 'gulp' );
const gulpData = require( 'gulp-data' );
const gulpForeach = require( 'gulp-foreach' );
const gulpJSBeautifier = require( 'gulp-jsbeautifier' );
const gulpRename = require( 'gulp-rename' );

// eslint-disable-next-line no-sync
const baseManifest = JSON.parse( fs.readFileSync( './package.json', 'utf8' ) );

/**
 * TODO: Add description of what this task does.
 * @returns {Object} An output stream from gulp.
 */
function copyComponentsBoilerplate() {
  return gulp.src( [ './src/' + ( parseComponentName || '*' ), '!./src/*.js', '!./src/*.less' ] )
    .pipe( gulpForeach( function( stream, file ) {
      const component = file.path.split( '/' ).pop();
      gulp.src( './scripts/templates/component-boilerplate/*' )
        .pipe( gulp.dest( './tmp/' + component ) );
      return stream;
    } ) );
}

/**
 * TODO: Add description of what this task does.
 * @returns {Object} An output stream from gulp.
 */
function copyComponentsSource() {
  return gulp.src( [
    './src/' + ( parseComponentName || '*' ),
    '!./src/*.js',
    '!./src/*.less'
  ] )
    .pipe( gulpForeach( function( stream, file ) {
      const component = file.path.split( '/' ).pop();
      const src = [
        file.path + '/**',
        '!' + file.path + '/package.json',
        '!' + file.path + '/node_modules',
        '!' + file.path + '/node_modules/**',
        '!' + file.path + '/npm-*'
      ];
      gulp.src( src )
        .pipe( gulp.dest( './tmp/' + component ) );
      return stream;
    } ) );
}

/**
 * TODO: Add description of what this task does.
 * @returns {Object} An output stream from gulp.
 */
function copyComponentsManifest() {
  return gulp.src( './src/' + ( parseComponentName || '*' ) + '/package.json' )
    .pipe( gulpData( function( file ) {

      /* Remove any dependencies from CF's package.json,
         we don't want components to have them. */
      delete baseManifest.dependencies;
      const manifest = deepmerge(
        baseManifest,
        JSON.parse( String( file.contents ) )
      );
      // After the merge, remove any scripts and dev deps.
      delete manifest.scripts;
      delete manifest.devDependencies;
      file.contents = new Buffer( JSON.stringify( manifest ) );
    } ) )
    .pipe( gulpRename( function( path ) {
      path.dirname = parseComponentName || path.dirname;
    } ) )
    .pipe( gulpJSBeautifier( {
      // eslint-disable-next-line camelcase
      indent_size: 2
    } ) )
    .pipe( gulp.dest( './tmp' ) );
}

gulp.task( 'copy:components:boilerplate', copyComponentsBoilerplate );
gulp.task( 'copy:components:source', copyComponentsSource );
gulp.task( 'copy:components:manifest', copyComponentsManifest );
