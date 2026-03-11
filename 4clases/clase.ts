export class Persona {

    nombre: string
    apellido: string
    edad: number
    profesion: string

    constructor(nmb: string, apll: string, edd: number, prfsn: string) {
        this.nombre = nmb
        this.apellido = apll
        this.edad = edd
        this.profesion = prfsn
    }



    saludar(): string {
        return `\nHola, mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años y soy ${this.profesion}.`
    }
}
