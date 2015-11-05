var path = require('path'),
    gitStatus = require('./lib/gitStatus'),
    componentsDir = path.join(__dirname, '../../../components');

gitStatus('./').then(function(result) {
  if (!result.stdout && !result.stderr) {
    console.log('Git working directory is clean.');
  } else {
    console.log('Git working directory is not clean. Commit your work before publishing.');
    console.log('> ' + result.stdout.trim());
  }
});

console.log(process.env.npm_lifecycle_event);
