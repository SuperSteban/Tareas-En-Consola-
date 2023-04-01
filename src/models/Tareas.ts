import { Tarea } from "./Tarea";


export class Tareas {
    
    listado: any = {} 

    list : Tarea[] = [] 

    constructor(){

        this.listado;
        this.list;
    };

    get listToDos() {

        let lista: Tarea[] =[];

        this.list.forEach(todo => {
            lista.push(todo);     
        });
        return lista;
    }

    createTarea(des:string = ''){
        const tarea = new Tarea(des);
        this.listado[tarea.id] = tarea;
        this.list.push(tarea);
    }
}