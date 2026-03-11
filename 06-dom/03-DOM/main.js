function msj(ms) {
    console.log("\n" + ms);
}
var h1 = document.querySelector("h1");
console.log(h1);
msj((h1 === null || h1 === void 0 ? void 0 : h1.textContent) || "No se encontró el elemento con la clase 'tittle'");
var tittle = document.querySelector(".tittl");
msj((tittle === null || tittle === void 0 ? void 0 : tittle.textContent) || "No se encontró el elemento con la clase 'tittle'");
var message = document.querySelector("#message");
msj((message === null || message === void 0 ? void 0 : message.placeholder) || "No se encontró el elemento con el id 'message'");
msj("Fin del programa");
