var variAny;
variAny = "Hola Mundo";
//?variAny = true;
//?;variAny = 22;
msj("variable any es: ".concat(variAny));
var variUnk;
variUnk = 22;
variUnk = true;
variUnk = "Hola Mundo";
// if (typeof variUnk === "number") {
//     msj(`variable unknown es: ${variUnk}`);
// }
if (typeof variUnk === "string") {
    msj("variable unknown es: ".concat(variUnk));
}
// if (typeof variUnk === "boolean") {
//     msj(`variable unknown es: ${variUnk}`);
// }
function error(message) {
    throw new Error(message);
}
msj("variable never es: ".concat(error("esto es un error")));
function msj(ms) {
    console.log("\n" + ms);
}
