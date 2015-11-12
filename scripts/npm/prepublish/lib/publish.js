var exec = require('child-process-promise').exec;

function publish(component) {
  return exec('npm publish', {
    cwd: './tmp/' + component
  });
}

module.exports = publish;
