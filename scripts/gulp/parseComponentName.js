var minimist = require('minimist'),
    args = minimist(process.argv.slice(2)),
    component = args.component || args.c;

module.exports = component;
