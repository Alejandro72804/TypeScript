export function sumar(a: number, b: number): number {
    return a + b;
}

export function restar(a: number, b: number): number {
    return a - b;
}

export function multiplicar(a: number, b: number): number {
    return a * b;
}

export function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

export function potencia(base: number, exponente: number): number {
    return Math.pow(base, exponente);
}