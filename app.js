const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { createTask, deleteTask, readFile, updateTask } = require('./tasksList/tasksList');

console.log('argv: ', argv);
const comando = argv._[0];

switch (comando) {
    case 'crear':
        createTask( argv.description );
        console.log('Crear nueva tarea.');
        break;

    case 'listar':
        const list = readFile();
        
        for( let task of list ) {

            const error    = colors.red;
            const success  = colors.green;
            const openMsj  = "======== Tarea ========";
            const closeMsj = "=======================";

            console.log( task.isDone ? success( openMsj ) : error( openMsj ) );
            console.log( task.description );
            console.log( 'Estado:', task.isDone );
            console.log( task.isDone ? success( closeMsj ) : error( closeMsj ) );
        }

        break;

    case 'actualizar':
        let updatedTask = updateTask( argv.description, argv.completed );
        console.log( updatedTask );

        break;

    case 'borrar':
        let deletedTask = deleteTask( argv.description );
        console.log( deletedTask );

        break;

    default:
        console.log('El comando ingresado es inválido :(');
        break;
}