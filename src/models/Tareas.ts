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

    borrarTarea(id:string){
        const tarea = this.list.findIndex(item => (item.id === id));
        this.list.splice(tarea, 1);
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
    toggleCompletadas(ids: any[]){
        
        if(ids){
            this.list.forEach(id => id.completadoEn = 1);
        }
        ids.forEach(id =>{
            const idxCompletados = this.list.findIndex(idTarea  => idTarea.id === id);
            if(this.list[idxCompletados].completadoEn === 1){
                this.list[idxCompletados].completadoEn = 0;
            }else{
                this.list[idxCompletados].completadoEn = 0;
            }
        });
        
        /* ids.forEach(id =>{
            const tarea:any = this.list.findIndex(idTarea => (idTarea.id !== id));
            console.log(tarea, this.list[tarea].completadoEn, "Indexado");
            this.list[tarea].completadoEn = 1;
            
        }); */
    }
}