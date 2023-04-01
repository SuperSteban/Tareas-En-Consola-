import inquirer from 'inquirer';

const  questions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?\n\n',
        choices: [
            {
                value: '1',
                name: "1. Crear Tarea"
            },
            {
                value: '2',
                name: "2. Listar Tarea"
            },
            {
                value: '3',
                name: "3. Listar Tarea Completada"
            },
            {
                value: '4',
                name: "4. Listar Tarea Pendientes"
            },
            {
                value: '5',
                name: "5. Completar tarea(s')"
            },
            {
                value: '6',
                name: "6. Borrar Tarea\n"
            },
            {
                value: '0',
                name: "0. Salir\n"
            },
        ]
    }
];

const inputInquiere = [
    {
        type : 'input',
        name : 'theInput',
        message: 'Presiona Enter Para Continuar\n',
    }
]


export const inquirerMenu = async() =>{
    
        console.clear();
    
        const {opcion} = await inquirer.prompt(questions);
        return opcion;
}

export const pausa = async () => {
    
    await inquirer.prompt(inputInquiere);
}

export const leerInput =async (message: string) => {
    
    const question= [
        {
            type: 'input',
            name: 'desc',
            message,
                validate(value: any){
                    if(value.length === 0){
                        throw 'Ingrese un valor';
                    }
                    return true;
                } 
        }

    ];
    const {desc} = await inquirer.prompt(question);
    return desc;

}