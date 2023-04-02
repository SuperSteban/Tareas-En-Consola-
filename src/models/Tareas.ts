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

    cargarTareas(data:any = []){
        this.list = data;
        return this.list;
    }
    listadoCompleto(){
        //Entrada: array<tarea>
        //Salida: listado limpio
            //1.- primera tarea| estado de la tarea
            //2.- segunda tarea | pendiente
        this.list.forEach((todo, i) =>{
            const idx:number = i+1;
            console.log(`${idx}::${todo.description} | ${(todo.completadoEn !== 1)?'Completado':'Pendiente'}`)
            

        });
        
    };
    listadoPendientesCompletadas(completadas = true){
        let contador = 0;
        this.list.forEach((todo, i) =>{
            
            const {completadoEn, description} = todo;
            if(completadas === false){
                if(completadoEn === 1){
                        console.log(`${contador+1} :: ${description} | Pendiente`);
                }
            }
            else if(completadas === true){
                if(completadoEn === 0){
                    console.log(`${contador+1} :: ${description} | Completada`);
                }
            }


        });
    }
}