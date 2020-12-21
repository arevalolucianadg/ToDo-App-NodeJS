const argv = require('./config/yargs').argv;

const { createTask } = require('./tasksList/tasksList');

console.log('argv: ', argv);
const comando = argv._[0];

switch (comando) {
    case 'crear':
        createTask( argv.description );
        console.log('Crear nueva tarea.');
        break;

    case 'listar':
        console.log('Lista de tareas.');
        break;

    case 'actualizar':
        console.log(argv.description);
        console.log('Actualizar tarea.');
        break;

    default:
        console.log('El comando ingresado es inválido :(');
        break;
}