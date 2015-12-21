var fs = require('fs'),
    path = require('path'),
    promisify = require('promisify-node');

promisify(fs.writeFile);

function updateChangelog(version) {
  var file = path.join(__dirname, '..', '..', '..', '..', 'CHANGELOG.md'),
      date = new Date().toJSON().slice(0, 10),
      latest = '## Unreleased\n\n### Added\n- \n\n### Changed\n- \n\n### Removed\n- \n\n## ' + version + ' - ' + date;
  changelog = fs.readFileSync(file, 'utf8');
  changelog = changelog.replace(/## Unreleased/g, latest);
  return fs.writeFile(file, changelog, 'utf8');
}

module.exports = updateChangelog;
