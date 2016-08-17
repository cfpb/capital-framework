'use strict';

var minimalist = require('minimist');
var argv = minimalist(process.argv.slice(2));
var component = argv.component || argv.c;

module.exports = component;
