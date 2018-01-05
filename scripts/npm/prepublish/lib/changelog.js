'use script';

const fs = require( 'fs' );
const path = require( 'path' );
const promisify = require( 'promisify-node' );

promisify( fs.writeFile );

function updateChangelog( version ) {
  const file = path.join( __dirname, '..', '..', '..', '..', 'CHANGELOG.md' );
  const date = new Date().toJSON().slice( 0, 10 );
  const latest = '## Unreleased\n\n### Added\n- \n\n### Changed\n- ' +
               '\n\n### Removed\n- \n\n## ' + version + ' - ' + date;
  // eslint-disable-next-line no-sync
  let changelog = fs.readFileSync( file, 'utf8' );

  changelog = changelog.replace( /## Unreleased/g, latest );
  return fs.writeFile( file, changelog, 'utf8', function() { } );
}

module.exports = updateChangelog;
