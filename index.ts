let cadena:string = "Hola Mundo hoy es Lunes";
let nombre :string = "Alejandro";
let edad :number = 22;
let esDesJun :boolean = true;
let fechaNacimiento :Date = new Date(2003, 6, 4);
let estudia :string | undefined;
let variableNull :null = null;


function msj(ms:string): void{
    console.log("\n"+ms);
}

function verificar():string{
    if (esDesJun) {
        return "soy un Desarrollador Junior";
    } else {
        return "no soy un Desarrollador Junior";
    }
}

//?msj(cadena);
//?msj(`nombre ${nombre}`);

msj(`${cadena}, mi nombre es ${nombre} y mi edad es ${edad} 
    \nmi fecha de nacimiento es ${fechaNacimiento.toLocaleDateString()} y ${verificar()} 
\nestudia ${estudia}, variable null es: ${variableNull} `);

msj("automatizado, sin necesidad de usar comando tsc");

msj("compilado con tsc main.ts -w");
msj("verificando compilacion");