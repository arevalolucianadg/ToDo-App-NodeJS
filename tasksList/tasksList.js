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

}


const createTask = ( description ) => {

    readFile();

    let task = {
        description,
        isDone: false,
    };

    tasksList.push( task );
    saveDB();

};

module.exports = {
    createTask
}