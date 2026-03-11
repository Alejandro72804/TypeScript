// Usuario para evaluar con Jest en Typescript prueba unitaria

export class Usuario {
    private nombre: string;
    private apellido: string;
    private activo: boolean;

    constructor(nombre: string, apellido: string, activo: boolean = true) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.activo = activo;
    }

    getName(): string {
        return this.nombre;
    }

    getProfile(): string {
        return `${this.nombre} ${this.apellido}`;
    }

    isStillActive(): boolean {
        return this.activo;
    }
}