var RegClient = require('silent-npm-registry-client'),
    client = new RegClient(),
    promisify = require('promisify-node');

promisify(client);

function getVersion(component) {
  var uri = 'https://registry.npmjs.org/' + component;
  return client.get(uri, {timeout: 1000});
}

module.exports = getVersion;
