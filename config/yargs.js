const argvOpts = {

};

const argv = require('yargs')
    .command('listar', 'Lista de tareas.')
    .command('crear', 'Crear tarea.', {
        description: {
            alias: 'd',
            demand: true,
            describe: 'Descripción de la nueva tarea.'
        }
    })
    .command('actualizar', 'Actualizar tarea.', {
        description: {
            alias: 'd',
            demand: true,
        },
        completed: {
            alias: 'c',
            default: true,
        }
    })
    .command('borrar', 'Borrar tarea.', {
        description: {
            alias: 'd',
            demand: true,
            describe: 'Descripción de la tarea a eliminar.'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
};