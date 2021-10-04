const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
    try { 
        let salida = '';
        for(let i = 1 ; i <= hasta ; i++){
            salida += `${ base } x ${ i } = ${ i * base }\n`;
        }
        if( listar ) {
            console.log('========================='.green);
            console.log(`     tabla del: ${ base }        `.inverse);
            console.log('========================='.green);
            console.log( salida.trap.rainbow );
        }
        fs.writeFileSync(`./salida/tabla${ base }.txt`, salida );
        return `tabla${ base }.txt creado`;
    } catch ( err ) {
        throw err;
    }

};

module.exports = {
    crearArchivo
}