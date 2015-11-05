var logSymbols = require('log-symbols'),
    chalk = require('chalk'),
    indentString = require('indent-string');

var printLn = {
  success: function(msg, indent) {
    return console.log(indentString(logSymbols.success + ' ' + msg, ' ', indent ? 4 : 2));
  },
  info: function(msg, indent) {
    return console.log(indentString(logSymbols.info + ' ' + msg, ' ', indent ? 4 : 2));
  },
  warning: function(msg, indent) {
    return console.log(indentString(logSymbols.warning + ' ' + msg, ' ', indent ? 4 : 2));
  },
  error: function(msg, indent) {
    return console.log(indentString(logSymbols.error + ' ' + msg, ' ', indent ? 4 : 2));
  }
}

module.exports = printLn;
