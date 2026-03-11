//Valores genericos

function mostrarValor<T>(valor: T): void {
    console.log("El valor es: " + valor);
}

let output1= mostrarValor<string>("Hola Mundo");
let output2= mostrarValor<number>(42);
let output3= mostrarValor<boolean>(true);

import { Caja } from "./caja";

let caja1 = new Caja<string>("Contenido de texto");
caja1.mostrarContenido();

let caja2 = new Caja<number>(123);
caja2.mostrarContenido();

let caja3 = new Caja<boolean>(true);
caja3.mostrarContenido();

caja1.mostrarListaMixta();
caja2.mostrarListaMixta();
caja3.mostrarListaMixta();

