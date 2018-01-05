const component = require( './parseComponentName' );
const fs = require( 'fs' );
const gulp = require( 'gulp' );
const gulpApplyTemplate = require( 'gulp-apply-template' );
const gulpData = require( 'gulp-data' );
const gulpRename = require( 'gulp-rename' );
const gulpMarkdown = require( 'gulp-markdown' );

gulp.task( 'template:readmes', () => {
  const pkgs = './src/' + ( component || '*' ) + '/package.json';
  return gulp.src( pkgs )
    .pipe( gulpData( function( file ) {
      const content = String( file.contents );
      return JSON.parse( content );
    } ) )
    .pipe( gulpApplyTemplate( {
      engine: 'lodash',
      template: './scripts/templates/README.md.tmpl',
      props: [ 'contents', 'data' ],
      context: file => file.data
    } ) )
    .pipe( gulpRename( path => {
      path.dirname = component || path.dirname;
      path.basename = 'README';
      path.extname = '.md';
    } ) )
    .pipe( gulp.dest( 'tmp' ) );
} );

gulp.task( 'template:usage', () => gulp.src( './src/' + ( component || '*' ) + '/usage.md' )
  .pipe( gulpMarkdown() )
  .pipe( gulpData( file => {
    const content = String( file.contents );
    let component = file.path.split( '/' );
    component = component[component.length - 2];
    return {
      name: component,
      body: content,
      // eslint-disable-next-line no-sync
      hasJS: fs.existsSync( './src/' + component + '/src/' + component + '.js' )
    };
  } ) )
  .pipe( gulpApplyTemplate( {
    engine: 'lodash',
    template: './scripts/templates/preview.html.tmpl',
    props: [ 'contents', 'data' ],
    context: function( file ) {
      return file.data;
    }
  } ) )
  .pipe( gulpRename( path => {
    path.dirname = component || path.dirname;
  } ) )
  .pipe( gulp.dest( 'tmp' ) ) );
