'use strict';

var finalhandler = require( 'finalhandler' );
var fs = require( 'fs' );
var http = require( 'http' );
var serveStatic = require( 'serve-static' );
var path = require( 'path' );
var wcag = require( 'wcag' );
var logSymbols = require( 'log-symbols' );

if ( !process.env.ACHECKER_ID ) {
  throw new Error( 'Please export an ACHECKER_ID environment variable.' );
}

fs.readdir( path.join( __dirname, '..', '..', '/tmp' ), function( err, dirs ) {
  if ( err ) {
    throw new Error( 'Didn\'t read directory.' );
  }
  dirs.forEach( function( component ) {
    if ( component.indexOf( 'cf-' ) !== 0 ) return;
    startServer( component, testComponent );
  } );
} );

/**
 * Start server to run tests.
 * @param {string} component  - The Capital Framework compontent to serve up.
 * @param {function} cb - The callback
 */
function startServer( component, cb ) {
  var serve = serveStatic( path.join( __dirname, '/tmp/' + component ) );
  var server = http.createServer( function( req, res ) {
    var done = finalhandler( req, res );
    serve( req, res, done );
  } );

  // Listen on a random port
  // TODO: This doesn't verify the port is available. We might get collisions.

  server.listen( 0 );

  server.on( 'listening', function() {
    var port = server.address().port;
    cb( component, server, port );
  } );
}

function testComponent( component, server, port ) {
  var options = {
    id: process.env.ACHECKER_ID,
    uri: 'http://localhost:' + port + '/usage.html',
    guide: '508'
  };

  wcag( options, function( error, data ) {
    if ( error ) return console.error( error );
    if ( data.status === 'PASS' ) {
      console.error(
        logSymbols.success, ' ' + options.guide + ': ' + component
      );
    } else {
      console.error(
        logSymbols.error, ' ' + options.guide + ': ' + component
      );
      console.error( data.errors );
      // TODO: Rather than immediately exiting we should collect the names of
      // all failed components and display them at the end.
      process.exit( 1 );
    }
    server.close();
  } );
}
