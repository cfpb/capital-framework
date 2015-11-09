var exec = require('child-process-promise').exec;

function gulp(component) {
  return exec('gulp build --component=' + component);
}

module.exports = gulp;
