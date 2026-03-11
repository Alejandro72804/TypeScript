function  msj(msj:string):void{
    return console.log("\n"+msj);
}

// Función con parámetros opcionales

function saludo(txt:string , hdia: string){


    let cad:string = txt 

    if(hdia){
        cad += " " + hdia;
    }
return msj(cad);
};

saludo("Hola", "buenos días");
saludo("Hola", "buenas tardes");
saludo("Hola", "buenas noches");
saludo("Hola", "");


// Función con multiples opciones

function eleccion(txt:string , opc:number): void{
    let cad ="Hola, soy " + txt;

    switch(opc){
case 0: cad+= ". No soy un estudiante";break;
case 1: cad+= ". Soy un estudiante";break;
case 2: cad+= ". Soy un profesor";break;
default: cad+= "";break;
    }
    return msj(cad);
}

eleccion("Alejandro", 0);
eleccion("Maribel", 1);
eleccion("Carlos", 2);
eleccion("Lucia", 3);

//Parametros de Lista

function sumaTodos(...numeros:number[]):number{

    return numeros.reduce((acumulado, actual) => acumulado + actual,0);

}

msj("La suma es: " + sumaTodos(1,2,3,4,5));


// Valores por defecto

function despedida(txt:string , despedir: string="Adiós"){

return msj(`${despedir}, ${txt}`);
};

despedida("Alejandro");
despedida("Maribel", "Hasta luego");
despedida("Carlos", "Nos vemos");

//Valores genericos

function mostrarValor<T>(valor: T): void {
    console.log("\nEl valor es: " + valor);
}

let output1= mostrarValor<string>("Hola Mundo");
let output2= mostrarValor<number>(42);
let output3= mostrarValor<boolean>(true);