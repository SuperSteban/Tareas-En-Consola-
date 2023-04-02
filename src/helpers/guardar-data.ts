
import { appendFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
const savePath: string = './db/data.json'; 


export const saveData = (data:any)=>{

    writeFileSync(savePath, JSON.stringify(data));
}

export const readData = async()=>{
    try{
        if(!existsSync(savePath)){
            appendFileSync(savePath, '');
            console.log(existsSync(savePath));
        }
        const data = readFileSync(savePath, {encoding: 'utf-8'});
        if(data === undefined || data === ''){
            throw 'Error data vacia'
        }
        const parseData = JSON.parse(data); // transforma del la lectura string a un objeto
        return parseData;
    }catch(err){
        console.log(err, existsSync(savePath));

    }
    
}