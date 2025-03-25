import { Calculadora } from './calculadora';
import readlineSync from 'readline-sync'; 

describe('Calculadora', () => {
    let calculadora: Calculadora;

    beforeEach(() => {
        calculadora = new Calculadora();
    })

    function getUserInput(prompt: string): number {
        const input = readlineSync.question(prompt);
        const parseNumber = parseFloat(input);
        if (isNaN(parseNumber)) {
            throw new Error('Por favor, insira um numero valido')
        }
        return parseNumber
    }

    test('adicao', () => {
        const a = getUserInput('Escolha seu primeiro numero da soma');
        const b = getUserInput('Escolha seu segundo numero da soma');
        const resultado = calculadora.somar(a, b);
        console.log(`Soma de ${a} + ${b} = ${resultado}`);
        expect(resultado).toBe(a + b);
   
    });

    test('subtracao', () => {
        const a = getUserInput('Escolha seu primeiro numero da subtracao')
        const b = getUserInput('Escolha seu segundo numero da subtracao')
        const resultado = calculadora.subtrair(a, b);
        console.log(`subtracao de ${a} - ${b} = ${resultado}`);
        expect(resultado).toBe(a - b);
    })

    test('multiplicacao', () => {
        const a = getUserInput('Escolha seu primeiro numero da multiplicacao')
        const b = getUserInput('Escolha seu segundo numero da multiplicacao')
        const resultado = calculadora.multiplicar(a, b);
        console.log(`Multiplicacao de ${a} * ${b} = ${resultado}`);
        expect(resultado).toBe(a * b);
    })

    test('divisao', () => {
        const a = getUserInput('Escolha seu primeiro numero da divisao')
        const b = getUserInput('Escolha seu segundo numero da divisao')
        if (b === 0) {
            expect(() => calculadora.dividir(a, b)).toThrow('Nao se pode dividir por zero');
            console.log('Nao se pode dividir por zero')
            return;
        }
        const resultado = calculadora.dividir(a, b);
        console.log(`Divisao de ${a} / ${b} = ${resultado}`);
        expect(resultado).toBe(a / b);
    });

    test('fatorial', () => {
        const n = getUserInput('Escolha seu numero para calcular o fatorial')
        if (n < 0) {
            console.log('Fatoriais nao podem ser negativos')
            return;
        }
        let expected = 1;
        for (let i = 1; i <= n; i++) {
            expected *= i;
        }
        const resultado = calculadora.fatorial(n);
        console.log(`Seu fatorial é ${n} = ${resultado}`);
        expect(resultado).toBe(expected);
    });

    test('potencia', () => {
        const base = getUserInput('Escolha sua base para calcular a potencia: ');
        const expoente = getUserInput('Escolha seu expoente para calcular a potencia: ');
        const resultado = Math.pow(base, expoente);
        console.log(`Potência de ${base} ^ ${expoente} = ${resultado}`); 
        expect(resultado).toBe(calculadora.potencias(base, expoente)); 
    });
});