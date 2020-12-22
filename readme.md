# ToDo App en terminal con NodeJS

## Instalación
1. Clonar repositorio:
   `git clone https://github.com/arevalolucianadg/ToDo-App-NodeJS.git`

2. Para iniciar el proyecto, ejecutar: `npm i` o `npm install` en la carpeta raíz del proyecto.

## Comandos

* `node app --help` > ver opciones de comando. 
* `node app listar` > ver lista de tareas.
* `node app crear -d 'Descripcion de tarea'` > Crear nueva tarea.
  * **-d** o **--description** *requerida*
* `node app actualizar -d 'Descripción de la tarea a actualizar' -c false` > Actualizar tarea.
  * **-d** o **--description** *requerida* - Nombre literal de la tarea creada.
  * **-c** o **--completed** *default: true* - Boolean tarea completada o no.
* `node app borrar -d 'Descripción de la tarea a borrar.` > Eliminar tarea.
  * **-d** o **--description** *requerida* - Nombre literal de la tarea creada.