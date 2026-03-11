export class Caja<T> {

    private eleccion: T;
    private elementos: T[];
    private listamixta: (string | number | boolean)[];

    constructor(valor: T) {
        this.eleccion = valor;
        this.elementos = [];
        this.listamixta = ["Rojo", "Verde", "Azul", "Amarillo", "Naranja", 1, 2, 3, 4, 5, true, false, true, false, false]
    }

    // getters
    public getValor(): T {
        return this.eleccion;
    }
    public getElementos(): (T)[] {
        return this.elementos;
    }

    private addElemento(lst: T[]): void {

        this.elementos = lst;

    }
    // definir el contenido de la caja dependiendo del tipo de dato
    private definirCaja(): void {

        switch (typeof this.eleccion) {
            case "string": this.addElemento(["Rojo", "Verde", "Azul", "Amarillo", "Naranja"] as T[]); break;
            case "number": this.addElemento([1, 2, 3, 4, 5] as T[]); break;
            case "boolean": this.addElemento([true, false, true, false, false] as T[]); break;
        }

    }

    //mostrar caja
    public mostrarContenido(): void {
        this.definirCaja()
        const lista = this.getElementos();
        const aleatorio = lista[Math.floor(Math.random() * lista.length)];
        console.log("El contenido de la caja es: " + aleatorio);
    }

    public mostrarListaMixta(): void {

        const aleatorio = this.listamixta[Math.floor(Math.random() * this.listamixta.length)];
        console.log("El contenido de la Caja sorpresa es: " + aleatorio);
    }

}