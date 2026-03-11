//Practica Extends

function msj(msj: string): void {
    return console.log("\n"+msj);
}


let cadena: string = "Hola Mundo";

msj(cadena+","+ cadena.length.toString());

function getLongitud <T extends {length: number}>(obj: T): number {
    return obj.length;
}

msj(cadena+","+getLongitud(cadena).toString());

let arreglo: number[] = [1, 2, 3, 4, 5];

msj(arreglo+" --> "+getLongitud(arreglo).toString());