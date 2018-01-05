const build = require( './build' );
const changelog = require( './changelog' );
const checkNpmAuth = require( './checkNpmAuth' );
const confirm = require( './confirm' );
const fs = require( 'fs' );
const getArgs = require( './getArgs' );
const getNpmVersion = require( './getNpmVersion' );
const git = require( './git' );
const gitStatus = require( './gitStatus' );
const print = require( './print' );
const publish = require( './publish' );

// eslint-disable-next-line no-sync
const pkg = JSON.parse( fs.readFileSync( 'package.json', 'utf8' ) );

module.exports = {
  printLn:       print,
  confirm:       confirm,
  getGitStatus:  gitStatus,
  build:         build,
  publish:       publish,
  git:           git,
  changelog:     changelog,
  getNpmVersion: getNpmVersion,
  checkNpmAuth:  checkNpmAuth,
  pkg:           pkg,
  option:        getArgs
};

process.on( 'SIGINT', () => {
  module.exports.printLn.error( 'OMG ABORT EVERYTHING.' );
  process.exit( 1 );
} );
