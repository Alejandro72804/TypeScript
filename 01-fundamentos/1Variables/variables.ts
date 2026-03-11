let variAny: any ;
variAny = "Hola Mundo"
//?variAny = true;
//?;variAny = 22;


msj(`variable any es: ${variAny}`);

let variUnk: unknown ;
variUnk = 22;
variUnk = true;
variUnk = "Hola Mundo";

// if (typeof variUnk === "number") {
//     msj(`variable unknown es: ${variUnk}`);
// }
if (typeof variUnk === "string") {
    msj(`variable unknown es: ${variUnk}`);
}
// if (typeof variUnk === "boolean") {
//     msj(`variable unknown es: ${variUnk}`);
// }

function error(message: string): never {
    throw new Error(message);
}

msj(`variable never es: ${error("esto es un error")}`);

function msj(ms:string): void{
    console.log("\n"+ms);
}