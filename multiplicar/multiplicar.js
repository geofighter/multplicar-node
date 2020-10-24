const { rejects } = require('assert');
//rqeuires
const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log('=============================='.yellow);
    console.log(`|       Tabla de ${base}           |`.white);
    console.log('=============================='.yellow);
    for (let i = 1; i <= limite; i++) {
        result = base * i;
        console.log(`${base} * ${i} = ${result}`);
    }
}


const { resolve } = require('path');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let resultado = base * i;
            data += (`${base} * ${i} = ${resultado}\n`);
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/Tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`table-${base}-al-${limite}.txt`);

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}