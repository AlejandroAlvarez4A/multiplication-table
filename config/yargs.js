const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        type: 'string',
        describe: 'Es la base de la tabla de multiplicar' 
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola' 
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta donde debe ir la tabla' 
    })
    .check((argv, options ) => {
        if ( isNaN(argv.b) ){
            throw 'Introduzca un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;