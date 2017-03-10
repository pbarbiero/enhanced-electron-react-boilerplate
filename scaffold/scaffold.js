const cli = require('vorpal')();
const wizard = require('./src/wizard.js');

cli
  .command('scaffold')
  .action( ( args, cb ) => {
    return wizard( cb, cli.activeCommand );
  } );

cli
  .delimiter('scaffold$')
  .show()
  .exec('scaffold');
