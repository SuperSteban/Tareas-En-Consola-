import { v4 as uuidv4 } from 'uuid';

export class Tarea {
    id: string = '';
    description : string = '';
    completadoEn = null;

    constructor (descript: string){
        this.id = uuidv4();
        this.description = descript;
        this.completadoEn = null;
    }
}