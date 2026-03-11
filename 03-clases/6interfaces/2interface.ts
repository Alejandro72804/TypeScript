 // Utilizar ¡ hace opcional la propiedad ciudad

console.log("interfaces con propiedad opcional");
interface direccion {
    calle: string;
    numero: number;
    ciudad?: string;
}
let direccion: direccion = {
    calle: "Calle Falsa",
    numero: 123,
}

console.log("direccion ", direccion);

let direccionCompleta: direccion = {
    calle: "Calle 41",
    numero: 16,
    ciudad: "Monteria"
}

console.log("\ndireccionCompleta ", direccionCompleta);

// Interfaces solo lectura

console.log("\ninterfaces solo lectura");

interface producto {
    readonly id: number; //Valor fijo, solo lectura
    nombre: string;
    precio: number;
}

let producto: producto = {
    id: 1,
    nombre: "Laptop",
    precio: 1000
}

console.log("producto ", producto);

//Interface Extendida

interface computador extends producto{
    readonly serie : string;
    marca: string;
    modelo: string;
}

let computador: computador = {
    id: 2,
    nombre: "Computador de escritorio",
    precio: 1500,
    serie: "ABC123",
    marca: "Dell",
    modelo: "XPS 8930"
}

console.log("\ncomputador ", computador);