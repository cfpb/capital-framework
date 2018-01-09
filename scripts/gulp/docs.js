const fs = require( 'fs' );
const gulp = require( 'gulp' );
const gulpUtil = require( 'gulp-util' );
const { spawn } = require('child_process');

const GITBOOK_PATH = '../node_modules/gitbook-cli/bin/gitbook.js';

/**
 * Generate Capital Framework gitbook documentation.
 */
function docsStart() {
  const server = spawn(
    'node',
    [
      GITBOOK_PATH,
      'serve',
      '--log=warn'
    ],
    { cwd: 'docs' }
  );

  server.stdout.on( 'data', data => {
    gulpUtil.log( `${data}` );
  } );

  server.stderr.on( 'data', data => {
    gulpUtil.log( `stderr: ${data}` );
  } );

  server.on( 'close', code => {
    gulpUtil.log( `child process exited with code ${code}` );
  } );
}

/**
 * Generate Capital Framework gitbook documentation.
 */
function docsBuild() {
  gulp.src('./dist/capital-framework.min.js')
    .pipe(gulp.dest('./docs/_assets/js'));

  const pkg = JSON.parse( fs.readFileSync( 'package.json' ) );
  const book = JSON.parse( fs.readFileSync( 'docs/book.json' ) );
  const cfVersion = pkg.version;
  book.variables.title = `Capital Framework ${cfVersion}`;
  fs.writeFileSync( 'docs/book.json', JSON.stringify( book, null, 2 ) );

  spawn(
    'node',
    [
      GITBOOK_PATH,
      'install'
    ],
    {
      stdio: 'inherit',
      cwd: 'docs'
    }
  ).on( 'close', code => {
    gulpUtil.log( `gitbook install child process exited with code ${code}` );

    // TODO: It's unclear why the theme isn't installing its own dependencies.
    //       It would be nice to not have to manually run npm install here.
    spawn( 'npm', [ 'install' ],
      {
        stdio: 'inherit',
        cwd: 'docs/node_modules/gitbook-plugin-theme-cfpb'
      }
    ).on( 'close', code => {
      gulpUtil.log( `gitbook build child process exited with code ${code}` );

      spawn(
        'node',
        [
          GITBOOK_PATH,
          'build'
        ],
        {
          stdio: 'inherit',
          cwd: 'docs'
        }
      ).on( 'close', code => {
        gulpUtil.log( `gitbook build child process exited with code ${code}` );
      } );
    } );
  } );
}

gulp.task( 'docs:start', docsStart );
gulp.task( 'docs:build', docsBuild );
gulp.task( 'docs',
  [
    'docs:build'
  ]
);
