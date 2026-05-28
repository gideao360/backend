const input = require("readline-sync");

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro:não é permitido dividir por 0";
    }

    return a / b;
}

let num1 = input.questionFloat("Digite um número: ");
let num2 = input.questionFloat("Digite outro número: ");
console.log("Resultado da soma: " + soma(num1, num2));
console.log("Resultado da subtracao: " + subtracao(num1, num2));
console.log("Resultado da multiplicacao: " + multiplicacao(num1, num2));
console.log("Resultado da divisao: " + divisao(num1, num2));