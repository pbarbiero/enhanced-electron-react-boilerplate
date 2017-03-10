const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const componentPath = path.resolve( __dirname, '../../src/components/');

module.exports = ( cb, cli ) => {

  cli.log('');
  cli.log( chalk.green.bold('Scaffold a new component') );
  cli.log( chalk.gray('Components will be created at '+ componentPath ) );
  cli.log('');

  return cli
    .prompt([
      {
        name: "name",
        message: "Component Name (Must start with a Capital letter): ",
        validate: (name) => {
          if ( !name ) {
            cli.log( chalk.red('Can not be empty') );
            return 'Can not be empty';
          }
          if ( !name.match(/^[A-Z]/) ) {
            cli.log( chalk.red('Must start with a '+ chalk.inverse('C') + chalk.red('apital letter') ) );
            return false;
          }
          let newComponentPath = path.resolve( componentPath, name );
          if ( fs.existsSync( newComponentPath ) ) {
            cli.log(
              chalk.red('Component '+ chalk.bold(name) +' already exists ('+ newComponentPath +')') );
            return false;
          }
          return true
        }
      },
      {
        name: "stateless",
        type: "confirm",
        default: true,
        message: "Stateless component?"
      },
      {
        name: "redux",
        type: "confirm",
        default: false,
        message: "Bundle component with Redux?"
      }
    ])
    .then( ( args ) => {
      cli.log( args );

      let newComponentPath = path.resolve( componentPath, args.name );
      cli.log(
        chalk.green('Creating component ') +
        chalk.yellow.bold(args.name) +
        chalk.green(' at ') +
        chalk.yellow(newComponentPath)
      );

      cb();
    } );

};
