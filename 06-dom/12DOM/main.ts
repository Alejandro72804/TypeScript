function msj(ms: string

) {
    console.log("\n" + ms);
}

const h1 = document.querySelector("h1");

console.log(h1);

msj(h1?.textContent || "No se encontró el elemento con la clase 'tittle'");

let tittle : HTMLHeadElement = document.querySelector(".tittl") as HTMLHeadElement;

msj(tittle?.textContent || "No se encontró el elemento con la clase 'tittle'");

const message = document.querySelector("#message") as HTMLInputElement;

msj(message?.placeholder || "No se encontró el elemento con el id 'message'");


msj("Fin del programa");
