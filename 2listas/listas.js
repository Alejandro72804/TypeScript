function msj(ms) {
    console.log("\n" + ms);
}
msj("Ejemplo de listas en TypeScript");
var nombres = ["Alejandro", "Maria", "Juan"];
msj("nombres: ".concat(nombres));
var numeros = [1, 2, 3, 4, 5];
msj("numeros: ".concat(numeros));
var booleanos = [true, false, true];
msj("booleanos: ".concat(booleanos));
var fechas = [new Date(2020, 0, 1), new Date(2021, 0, 1)];
msj("fechas: ".concat(fechas.map(function (fecha) { return fecha.toLocaleDateString(); })));
var mixto = ["Hola", 42, true];
msj("mixto: ".concat(mixto));
var arrayVacio = [];
msj("arrayVacio: ".concat(arrayVacio));
var personas = [
    { nombre: "Alejandro", edad: 22, EsDesJun: true },
    { nombre: "Maria", edad: 30, EsDesJun: false },
    { nombre: "Juan", edad: 25, EsDesJun: true }
];
console.log("\npersonas: ", personas);
msj(personas.map(function (persona) { return "Nombre: ".concat(persona.nombre, ", Edad: ").concat(persona.edad, ", EsDesJun: ").concat(persona.EsDesJun); }).join("\n"));
personas.push({ nombre: "Ana", edad: 28, EsDesJun: false });
console.log("\npersonas actualizada: ", personas);
msj(personas.map(function (persona) { return "Nombre: ".concat(persona.nombre, ", Edad: ").concat(persona.edad, ", EsDesJun: ").concat(persona.EsDesJun); }).join("\n"));
//tuplas
msj("Ejemplo de tuplas");
var persona = ["Alejandro", 22, true];
console.log("\npersona: ", persona);
var personasTupla = [];
//! Agregar personas a la tupla
personasTupla.push(["Maria", 30, false]);
personasTupla.push(["Juan", 25, true]);
//* Mostrar personas en la tupla Recorriendo la tupla con forEach
personasTupla.forEach(function (persona) {
    console.log("\n-> Persona: " + persona);
    var nombre = persona[0];
    var edad = persona[1];
    var esDesJun = persona[2];
    msj("nombre: " + nombre);
    msj("edad: " + edad);
    msj("Es Desarrollador Junior? " + esDesJun);
});
//Enumeradores
msj("Ejemplo de enumeradores");
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 2] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
    DiaSemana[DiaSemana["Sabado"] = 5] = "Sabado";
    DiaSemana[DiaSemana["Domingo"] = 6] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
var dia = DiaSemana.Lunes;
msj("dia: ".concat(DiaSemana[dia]));
