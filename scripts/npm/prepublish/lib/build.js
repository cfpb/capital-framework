var exec = require('child-process-promise').exec;

function gulp(component) {
  return exec('gulp build --component=' + component.name);
}

module.exports = gulp;
