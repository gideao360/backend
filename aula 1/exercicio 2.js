const prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);

if (num2 !== 0) {
    let divisao = num1 / num2;
    console.log("Divisão:", divisao);
} else {
    console.log("Erro: não é possível dividir por zero.");
}