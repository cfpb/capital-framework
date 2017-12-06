'use script';

var fs = require( 'fs' );
var path = require( 'path' );
var promisify = require( 'promisify-node' );

promisify( fs.writeFile );

function updateChangelog( version ) {
  var file = path.join( __dirname, '..', '..', '..', '..', 'CHANGELOG.md' );
  var date = new Date().toJSON().slice( 0, 10 );
  var latest = '## Unreleased\n\n### Added\n- \n\n### Changed\n- ' +
               '\n\n### Removed\n- \n\n## ' + version + ' - ' + date;
  var changelog = fs.readFileSync( file, 'utf8' );

  changelog = changelog.replace( /## Unreleased/g, latest );
  return fs.writeFile( file, changelog, 'utf8', function() { return; } );
}

module.exports = updateChangelog;
