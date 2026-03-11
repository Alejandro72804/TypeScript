export class Persona {

    public nombre: string //desde cualquier parte del programa
    public apellido: string 
    protected edad: number //solo desde la clase y sus subclases
    private profesion: string //solo desde la clase

    constructor(nmb: string, apll: string, edd: number, prfsn: string) {
        this.nombre = nmb
        this.apellido = apll
        this.edad = edd
        this.profesion = prfsn
    }



    public saludar(): string {

        const edad = this.getEdad();
        const profesion = this.getProfesion();

        return `\nHola, mi nombre es ${this.nombre} ${this.apellido}, tengo ${edad} años. soy ${profesion}.`;
    }

    protected getEdad(): number {
        return this.edad;
    }
    
    public getProfesion(): string {
        return this.profesion;
    }



}
