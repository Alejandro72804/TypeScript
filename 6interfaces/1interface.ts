interface persona {
    nombre: string;
    apellido: string;
    edad: number;
    profesion: string;
}

let persona: persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    profesion: "Desarrollador"
}

console.log("persona ", persona);


// Interfaces con funciones

interface operacion {
    (a: number, b: number): number;
}

let sumar: operacion = (a, b): number => {
    return a + b;
}
let restar: operacion = (a, b): number => {
    return a - b;
}
let multiplicar: operacion = (a, b): number => {
    return a * b;
}
let dividir: operacion = (a, b): number => {
    return a / b;
}

console.log("suma ", sumar(2, 3));
console.log("resta ", restar(2, 3));
console.log("multiplicación ", multiplicar(2, 3));
console.log("división ", dividir(2, 3));