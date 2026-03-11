import { Persona } from "./clase";

export class Empleado extends Persona {

    public salario: number
    private cargo: string

    constructor(nmb: string, apll: string, edd: number, prfsn: string, slr: number, crg: string) {
        super(nmb, apll, edd, prfsn)
        this.salario = slr
        this.cargo = crg
    }


    public getCargo(): string {
        return this.cargo;
    }

    public saludar(): string {

        return `\nHola, mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.getEdad()} años, soy ${this.getProfesion()} y trabajo como ${this.getCargo()}.`;

    }
}