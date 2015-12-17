var Promise = require('bluebird'),
    readline = require('readline'),
    options = require('./getArgs'),
    printLn = require('./print');

function confirm(opts) {
  opts = opts || {};
  var prompt = opts.prompt + ' [Y/n] ';
  return new Promise(function (resolve, reject) {
    // If the -s option is passed or we're in a CI, don't prompt the user.
    if (options.silent || process.env.CONTINUOUS_INTEGRATION) {
      return resolve(opts.data);
    }
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(prompt, function(answer) {
      if (!answer || /^y$|^yes$/.test(answer.trim().toLowerCase())) {
        printLn.info(opts.yes);
        resolve(opts.data);
      } else {
        reject(opts.no);
      }
      rl.close();
    });
    rl.on('SIGINT', function() {
      printLn.error('OMG ABORT EVERYTHING.');
      process.exit(1);
    });
  });
}

module.exports = confirm;
