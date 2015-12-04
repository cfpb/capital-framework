var exec = require('child-process-promise').exec;

function publish(component) {
  if (component) {
    return exec('npm publish', {
      cwd: './tmp/' + component
    });
  }
  // If no component is specified, publish all of CF.
  return exec('npm publish');
}

module.exports = publish;
