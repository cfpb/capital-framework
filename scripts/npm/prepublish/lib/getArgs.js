var argv = require('minimist')(process.argv.slice(2));

module.exports = {
  component: argv.component,
  silent: (argv.s || argv.silent),
  dryrun: (argv.dryrun),
  force: (argv.f || argv.force)
}
