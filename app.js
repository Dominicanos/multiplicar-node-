const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

console.log('comando', comando);

switch (comando) {
    case 'listar':
        //console.log('listar');
        //console.log('crear');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        // console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado : ${archivo}`))
            .catch(err =>
                console.log(err));
        break;

    default:
        console.log("comando no reconocido");
}

//let base = 5;

//let argv2 = process.argv;

//console.log('base', argv.base);
//console.log('Limite', argv.limite);
//console.log('argv2', argv2);

/*let parametro = argv[2];
let base = parametro.split('=')[1]
console.log(base);
crearArchivo(base)
    .then(archivo => console.log(`archivo creado : ${archivo}`))
    .catch(err =>
        console.log(err));*/