import { Persona } from "./clase";
import { Empleado } from "./empleado";

//Clase
console.log("Ejemplo de clase");
let persona = new Persona("Alejandro", "Mestra", 22, "Desarrollador Junior");
console.log(persona.saludar());

//Herencia
console.log("\nEjemplo de herencia");
let empleado = new Empleado("Maria", "Gomez", 30, "Diseñadora Grafica", 50000, "Estratega Digital");

console.log(empleado.saludar());