import { leerInput, inquirerMenu, pausa } from "./helpers/inquier";
import { Tareas } from "./models/Tareas";

console.clear();
const main = async () => {

    const tareas = new Tareas;
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
                console.log(tareas.listado);
                console.log('==========Clase===========');
                console.log(tareas.list);
                console.log('==========Getter==========');
                console.log(tareas.listToDos);


        }
        await pausa();

    } while (opt !== '0');
}
main();


