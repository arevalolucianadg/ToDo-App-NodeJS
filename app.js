const argv = require('yargs').argv;

const comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear nueva tarea.');
        break;

    case 'listar':
        console.log('Lista de tareas.');
        break;

    case 'actualizar':
        console.log('Actualizar tarea.');
        break;

    default:
        console.log('El comando ingresado es inválido :(');
        break;
}