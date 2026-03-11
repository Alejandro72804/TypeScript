function msj(ms: string): void {
    console.log("\n"+ms);
}
 // Función sin parámetros y sin valor de retorno

let cad:string = "Hola Mundo";
msj(cad);

// Función con parámetros y sin valor de retorno
function suma(a: number, b: number): number {
    return a + b;
}


let res: number = suma(5, 10);
msj("La suma es: " + res);
// Función con parámetros y con valor de retorno
function resta(a: number, b: number): number {
    return a - b;
}

res = resta(10, 5);
msj("La resta es: " + res);