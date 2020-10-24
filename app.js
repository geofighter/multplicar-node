const argv = require('./config/yargs').argv;
var colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: `, colors.inverse.white(archivo)))
            .catch(err => console.log(err));

        break;
    default:
        console.log('comando no reconocido');
}

//console.log(argv);
//console.log(argv.base);


//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(base);