export class Calculadora {
    somar(a: number, b: number): number {
        return a + b;
    }
    subtrair(a: number, b: number): number {
        return a - b;
    }
    multiplicar(a: number, b: number): number {
        return a * b;
    }
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Nao se pode dividir por zero')
        }
        return a / b;
    }
    fatorial(n: number): number {
        if (n < 0) {
            throw new Error('Fatoriais nao podem ser numeros negativos')
        }
        if (n === 0) {
            return 1;
        }
        return n * this.fatorial(n - 1);
    }

    potencias(base: number, expoente: number): number {
        return Math.pow(base, expoente);
    }
}