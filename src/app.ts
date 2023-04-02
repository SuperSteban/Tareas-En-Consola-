import { saveData, readData } from "./helpers/guardar-data";
import { leerInput, inquirerMenu, pausa } from "./helpers/inquier";
import { Tareas } from "./models/Tareas";

console.clear();
const main = async () => {

    const tareas = new Tareas; //instancia de tareas
    const tareasDB = readData();
    if(tareasDB){
        //Convertir Tareas A a un objeto que se pueda leer
        tareas.cargarTareas(tareasDB);
        //const tareasCargadas : any = tareas.cargarTareas(tareasDB);
    }
    let opt: string = '';
    do {
        opt = await inquirerMenu();
        console.log(`opcion Seleccionada ${opt}`);
        switch (opt) {
            case '1':
                //leer el input
                const desc = await leerInput('descripcion:');
                tareas.createTarea(desc);
                //crear Tarea
                console.log(desc);
                //console.log(tareas.listado, "list", tareas.list);
                break;
            case '2':
                tareas.listadoCompleto();
                //console.log(tareas.cargarTareas(tareasDB));

                /* console.log(tareas.listado);
                console.log('==========Clase===========');
                console.log(tareas.list);
                console.log('==========Getter==========');
                console.log(tareas.listToDos); */
                break;
            case '3':
                tareas.listadoPendientesCompletadas(true);
                break;
            case '4':
                tareas.listadoPendientesCompletadas(false);
                break;


        }
        saveData(tareas.list);
        await pausa();

    } while (opt !== '0');
}
main();


