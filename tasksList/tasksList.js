const fileSystem = require('fs');

let tasksList = [];

const saveDB = () => {

    const data = JSON.stringify( tasksList );

    fileSystem.writeFile(`db/data.json`, data, (err) => {
        if(err) throw new Error('No se pudo guardar la tarea.', err);
    })

};

const readFile = () => {

    try {
        tasksList = require('./../db/data.json');
    } catch (err) {
        tasksList = [];
    }

    return tasksList;

};


const createTask = ( description ) => {

    readFile();

    let task = {
        description,
        isDone: false,
    };

    tasksList.push( task );
    saveDB();

    return tasksList;
};

const updateTask = ( description, completed = true ) => {
    
    readFile();
    let updatedTask = tasksList.filter( task => task.description === description );
    updatedTask[0].isDone = completed;
    
    saveDB();
    
    return `La tarea \'${ updatedTask[0].description }\' ha sido actualizada.`;
};

const deleteTask = ( description ) => {

    readFile();
    let deletedTask = tasksList.filter( task => task.description !== description );

    tasksList = deletedTask; 
    saveDB();
    
    return `La tarea \'${ description }\' ha sido eliminada.`;

};

module.exports = {
    createTask,
    readFile,
    updateTask,
    deleteTask
};