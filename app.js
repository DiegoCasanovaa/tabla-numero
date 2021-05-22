const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombre => console.log( nombreArchivo = nombre ))
    .catch( err => console.log(err))

