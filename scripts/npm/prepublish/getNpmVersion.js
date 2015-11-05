var RegClient = require('npm-registry-client')
var client = new RegClient()
var uri = 'https://registry.npmjs.org/lodash'
var params = {timeout: 1000}
var _ = require('lodash');

client.get(uri, params, function (error, data, raw, res) {
  // error is an error if there was a problem.
  // data is the parsed data object
  // raw is the json string
  // res is the response from couch
  console.log(data.versions);
  _.sortBy(data.versions, function(n) {
    return Math.sin(n);
  });
})
