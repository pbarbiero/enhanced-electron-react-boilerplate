const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = ( args, componentPath ) => {

  return new Promise( (resolve, reject) => {

    let newComponentPath = path.resolve( componentPath, args.name );

    console.log('');
    console.log(
      chalk.green('Creating component ') +
      chalk.yellow.bold( args.name ) +
      chalk.green(' at ') +
      chalk.yellow( newComponentPath )
    );

    makeFolder( newComponentPath )
      .then( () => {
        return writeTemplates( newComponentPath, args );
      } )
      .then( () => {
        resolve( args );
      } )
      .catch( ( e ) => {
        reject( e );
      } )

  } );

};

const makeFolder = ( newComponentPath ) => {
  return new Promise( (resolve, reject) => {
    fs.mkdir( newComponentPath, resolve );
  } );
}

const writeTemplates = ( newComponentPath, args) => {
  return new Promise( (resolve, reject) => {
    console.log( chalk.grey(' - Writing Templates') );

    let files = [];
    if ( args.stateless ) {
      if ( args.redux ) {
        files.push({in: 'componentRedux.js', out: 'component.js'});
        files.push({in: 'statelessComponentRedux.js', out: `${args.name}.js`});
      } else {
        files.push({in: 'component.js', out: 'component.js'});
        files.push({in: 'statelessComponent.js', out: `${args.name}.js`});
      }
    } else {
      if ( args.redux ) {
        files.push({in: 'componentRedux.js', out: 'component.js'});
        files.push({in: 'statefulComponentRedux.js', out: `${args.name}.js`});
      } else {
        files.push({in: 'component.js', out: 'component.js'});
        files.push({in: 'statefulComponent.js', out: `${args.name}.js`});
      }
    }

    let promises = [];
    files.forEach( ( file ) => {
      promises.push(
        new Promise( (resolve, reject) => {
          let err = false;
          let read = fs.createReadStream( path.resolve( __dirname, '../templates', file.in ) );
          let write = fs.createWriteStream( path.resolve( newComponentPath, file.out ) );
          let rejectCleanup = ( e ) => {
            err = true;
            read.destroy();
            write.end();
            reject( e );
          };
          read.on('error', rejectCleanup);
          write.on('error', rejectCleanup);

          write.on('open', () => {
            read.on('data', ( chunk ) => {
              write.write( chunk.toString().replace(new RegExp('{{ComponentName}}', 'g'), args.name) );
            } );
          } );

          read.on('end', () => {
            if ( !err ) {
              resolve();
            }
          } );
        } )
      );
    } );

    Promise.all( promises )
      .then( () => {
        resolve();
      } )
      .catch( ( e ) => {
        reject( e );
      } )

  } );
}
