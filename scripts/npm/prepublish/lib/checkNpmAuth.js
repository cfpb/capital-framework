var RegClient = require('silent-npm-registry-client'),
    client = new RegClient(),
    promisify = require('promisify-node'),
    exec = require('child-process-promise').exec,
    printLn = require('./print');

promisify(client);

function checkAuth(component) {
  var uri = 'https://registry.npmjs.org/' + component;

  var getOwners = client.get(uri, {timeout: 10000}).then(function(data) {
    return data.maintainers;
  });
  var getCurrentUser = exec('npm whoami');

  return Promise.all([getOwners, getCurrentUser]).then(function(data) {
    var authorized = false,
        currentUser = data[1].stdout.trim();
    printLn.info('Logged into npm as ' + currentUser);
    data[0].forEach(function(maintainer) {
      authorized = maintainer.name == currentUser;
    });
    if (!authorized) {
      printLn.error('You\'re not listed as a maintainer in npm. Talk to a node-ledgable coworker for assistance.');
      process.exit(1);
    }
  }).catch(function(err) {
    if (/ENEEDAUTH/.test(err)) {
      printLn.error('You\'re not logged into npm. You need to authorize this machine using `npm login`.');
      process.exit(1);
    }
    console.error(err);
    process.exit(1);
  });
}

module.exports = checkAuth;
