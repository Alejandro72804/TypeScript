//decoradores practica

function personaDec(target: Function) {

    console.log('Decorador aplicado a la clase:', target);
    target.prototype.message = function (msj: string) {
        return `${msj}, ${this.nombre} ${this.apellido}`;
    }
}

@personaDec
class Persona {

    nombre: string;
    apellido: string;

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    Bienvenida():void {
    return console.log(`Bienvenido, ${this.nombre} ${this.apellido}`);
    }
    
    message!:(msj: string) => string ; 

}

let usuario = new Persona('Juan', 'Pérez');

usuario.Bienvenida();
console.log(usuario.message('Hola'));
console.log(usuario.message('Adios'));
