
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
const savePath: string = './db/data.json'; 


export const saveData = (data:any)=>{

    writeFileSync(savePath, JSON.stringify(data));
}

export const readData = ()=>{
    if(!(existsSync(savePath))) return null;
    const data = readFileSync(savePath, {encoding: 'utf-8'});
    const parseData = JSON.parse(data); // transforma del la lectura string a un objeto
    console.log(existsSync(savePath));
    return parseData;
}