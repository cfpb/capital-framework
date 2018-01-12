const fs = require( 'fs' );
const promisify = require( 'promisify-node' );

promisify( fs.writeFile );

/**
 * Updates the Unreleased section of the changelog to a versioned Release
 * and adds a new Unreleased section.
 * @param {string} file The path of the file to edit.
 * @param {string} date The date to tag the Release with.
 * @param {string} version The version to tag the Release with.
 * @returns {Function} The written file.
 */
function updateChangelog( file, date, version ) {
  let latest =
    '## Unreleased\n\n### Added\n-\n\n### Changed\n-\n\n### Removed\n-\n\n## ';
  latest = latest + version + ' - ' + date;

  // eslint-disable-next-line no-sync
  let changelog = fs.readFileSync( file, 'utf8' );

  changelog = changelog.replace( /## Unreleased/g, latest );

  return fs.writeFile( file, changelog, 'utf8' );
}

module.exports = updateChangelog;
