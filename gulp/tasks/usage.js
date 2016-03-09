'use strict';

var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();
var config = require( '../config' ).usage;
var handleErrors = require( '../utils/handleErrors' );
var pygmentize = require('pygmentize-bundled');
var path = require( 'path' );
var fileName;

/**
 * RegEx to replace GitHub Flavored Markdown backticks
 * with Pygments syntax
 */
var codeStart = new RegExp(/([\`]{3})\n+(\<)/g);
var codeEnd = new RegExp(/(\>)\n+([\`]{3})/g);
var startReplace = '{% highlight html %}\n<'
var endReplace = '>\n{% endhighlight %}'

var markdownOptions = {
  gfm: true,
  highlight: function (code, lang, callback) {
    pygmentize({ lang: 'html', format: 'html', options: { } }, code, function (err, result) {
      if (err) return callback(err);
      callback(null, result.toString());
    });
  }
};

/*
* take the usage.md files from the cf-components directory
* and convert from markdown to html with syntax highlighting
*/
gulp.task( 'usage', function() {
  return gulp.src( config.files.src )
    .on( 'error', handleErrors )
    .pipe( $.replace( codeStart, startReplace ) )
    .pipe( $.replace( codeEnd, endReplace ) )
    .pipe( $.markdown( markdownOptions ) )
    .pipe( $.tap( function ( file, t ) {
      fileName = path.dirname( file.path )
        .split( path.sep )
        .pop();
    }))
    .pipe($.rename(function (path) {
      path.basename = fileName;
    }))
    .pipe( gulp.dest( config.files.dest ) )
} );
