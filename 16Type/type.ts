//clase para practica type

type User = {
    id: number;
    name: string;
    email: string;
};

// comparacion con clase convencioanal
/*
class UserClass {
    id: number;
    name: string;
    email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

}
*/

// tipos parciales y solo lectura
console.log('\nEjemplo de tipos parciales y solo lectura:');
type parcial<T> = {
    [P in keyof T]?: T[P];
} 

type userparcial = parcial<User>;

type sololectura<T> = {
    readonly [P in keyof T]: T[P];
} 
type usersololectura = sololectura<User>;

let user1: userparcial = {
    id: 1,
    name: 'Juan',
    email: 'juan@gmail.com'
}

let user2: usersololectura = {
    id: 2,
    name: 'Maria',
    email: 'maria@gmail.com'
}

console.log(user1);
console.log(user2);

// template literal types
console.log('\nEjemplo de template literal types:');
type variantes = "pequeño" | "mediano" | "grande";

type claseCss = `boton-${variantes}`;

let boton1: claseCss = "boton-pequeño";
let boton2: claseCss = "boton-mediano";
let boton3: claseCss = "boton-grande";

console.log(boton1);
console.log(boton2);
console.log(boton3);

//type condicional
console.log('\nEjemplo de tipos condicionales:');

type esNumero<T> = T extends number ? true : false;

function esNumeroFunc<T>(valor: T): esNumero<T> {
    return (typeof valor === 'number') as esNumero<T>;
}

const resultado1 = esNumeroFunc(123); // true
const resultado2 = esNumeroFunc("hola"); // false

console.log(`¿Es 123 un número? ${resultado1}`);
console.log(`¿Es "hola" un número? ${resultado2}`);