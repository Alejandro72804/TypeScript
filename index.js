var cadena = "Hola Mundo hoy es Lunes";
var nombre = "Alejandro";
var edad = 22;
var esDesJun = true;
var fechaNacimiento = new Date(2003, 6, 4);
var estudia;
var variableNull = null;
function msj(ms) {
    console.log("\n" + ms);
}
function verificar() {
    if (esDesJun) {
        return "soy un Desarrollador Junior";
    }
    else {
        return "no soy un Desarrollador Junior";
    }
}
//?msj(cadena);
//?msj(`nombre ${nombre}`);
msj("".concat(cadena, ", mi nombre es ").concat(nombre, " y mi edad es ").concat(edad, " \n    \nmi fecha de nacimiento es ").concat(fechaNacimiento.toLocaleDateString(), " y ").concat(verificar(), " \n\nestudia ").concat(estudia, ", variable null es: ").concat(variableNull, " "));
msj("automatizado, sin necesidad de usar comando tsc");
msj("compilado con tsc main.ts -w");
msj("verificando compilacion");
