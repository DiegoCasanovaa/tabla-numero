const argv = require('yargs')
            .option('b', { 
                alias:'base',
                type: 'number',
                demandOption: true,
                defaultDescription: 'Es la base de la tabla de multiplicar'
            })
            .option('l',{ 
                alias:'listar',
                type: 'boolean',
                default: false,
                defaultDescription: 'Muestra la tabla en consola'
            })
            .option('h',{ 
                alias:'iteracion',
                type: 'number',
                defaultDescription: 'Numero de iteraciones'
            })
            .check( ( argv, options ) => { 
                if( isNaN( argv.b )){
                    throw 'La base tiene que ser un numero'
                }
                return true
            })
            .argv;

module.exports = argv;