var argv = require('minimist')(process.argv.slice(2)),
    component = argv.component || argv.c;

module.exports = component;
