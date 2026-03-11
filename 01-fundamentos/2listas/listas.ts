function msj(ms:string): void{
    console.log("\n"+ms);
}

msj("Ejemplo de listas en TypeScript");

let nombres:string[] = ["Alejandro", "Maria", "Juan"];
msj(`nombres: ${nombres}`);

let numeros:number[] = [1, 2, 3, 4, 5];
msj(`numeros: ${numeros}`);

let booleanos:boolean[] = [true, false, true];
msj(`booleanos: ${booleanos}`);

let fechas:Date[] = [new Date(2020, 0, 1), new Date(2021, 0, 1)];
msj(`fechas: ${fechas.map(fecha => fecha.toLocaleDateString())}`);

let mixto:(string | number | boolean)[] = ["Hola", 42, true];
msj(`mixto: ${mixto}`);

let arrayVacio: any[] = [];
msj(`arrayVacio: ${arrayVacio}`);

interface Persona {
    nombre: string;
    edad: number;
    EsDesJun: boolean;
}

let personas: Persona[] = [
    { nombre: "Alejandro", edad: 22, EsDesJun: true },
    { nombre: "Maria", edad: 30, EsDesJun: false },
    { nombre: "Juan", edad: 25, EsDesJun: true }
];

console.log("\npersonas: ", personas);
msj(personas.map(persona => `Nombre: ${persona.nombre}, Edad: ${persona.edad}, EsDesJun: ${persona.EsDesJun}`).join("\n"));


personas.push({ nombre: "Ana", edad: 28, EsDesJun: false });

console.log("\npersonas actualizada: ", personas);
msj(personas.map(persona => `Nombre: ${persona.nombre}, Edad: ${persona.edad}, EsDesJun: ${persona.EsDesJun}`).join("\n"));

//tuplas
msj("Ejemplo de tuplas");

let persona: [string, number, boolean] = ["Alejandro", 22, true];
console.log("\npersona: ", persona);

let personasTupla: [string, number, boolean][]  = [];

//! Agregar personas a la tupla

personasTupla.push(["Maria", 30, false]);
personasTupla.push(["Juan", 25, true]);

//* Mostrar personas en la tupla Recorriendo la tupla con forEach

personasTupla.forEach(persona => {
console.log("\n-> Persona: " + persona ) ;

let nombre: string = persona[0];
let edad : number = persona[1];
let esDesJun:boolean=persona[2];

msj("nombre: " + nombre);
msj("edad: "+edad);
msj("Es Desarrollador Junior? " + esDesJun);
});

//Enumeradores

msj("Ejemplo de enumeradores");

enum DiaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let dia: DiaSemana = DiaSemana.Lunes;
msj(`dia: ${DiaSemana[dia]}`);