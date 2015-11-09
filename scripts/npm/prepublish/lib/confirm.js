var Promise = require('bluebird'),
    readline = require('readline'),
    printLn = require('./print');

function confirm(opts) {
  opts = opts || {};
  return new Promise(function (resolve, reject) {
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(opts.prompt, function(answer) {
      if (answer && /^y$|^yes$/.test(answer.trim().toLowerCase())) {
        resolve(printLn.info(opts.yes));
      } else {
        reject(printLn.info(opts.no));
      }
      rl.close();
    });
  });
}

module.exports = confirm;
