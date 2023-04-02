import { v4 as uuidv4 } from 'uuid';
enum Estado {
    COMPLETADO,
    PENDIENTE,
}
export class Tarea {
    id: string = '';
    description : string = '';
    completadoEn:Estado = Estado.PENDIENTE;

    constructor (descript: string){
        this.id = uuidv4();
        this.description = descript;
        this.completadoEn = Estado.PENDIENTE;
    }
}