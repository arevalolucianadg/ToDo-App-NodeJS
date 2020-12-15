const argvOpts = {

};

const argv = require('yargs')
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
    .help()
    .argv;


module.exports = {
    argv
};