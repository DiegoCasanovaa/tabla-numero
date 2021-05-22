const fileSystem = require('fs');
const colors = require('colors')

const crearArchivo = (base, listar = false, iteracion) => {

    return new Promise ((res,rej) =>{ 
        if(base){

            console.log('==============================='.green);
            console.log(`           Tabla del ${base}         `);
            console.log('==============================='.green);
        
            let salida = ' ';
        
            for (let index = 1; index <= iteracion; index++) {
        
        
                let resultado = base * index;
            
                salida +=`${base} x ${index} = ${resultado}\n`.green;
                
            }
            
            if(listar){
                console.log(salida)
            }else{
                throw 'No se genero la lista'
            }
          
            let nombreArchivo = `./salida/tabla-${base}.txt`;
            fileSystem.writeFileSync( nombreArchivo , salida)

            res(nombreArchivo)

        }else{
            rej(` No se pudo crear la tabla-${base}`)
        }
    })
}

module.exports  = { crearArchivo }