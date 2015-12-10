var exec = require('child-process-promise').exec;

function build(component) {
  if (component) {
    return exec('gulp build --component=' + component.name);
  }
  // If no component is specified, build all of CF.
  return exec('gulp build');
}

module.exports = build;
