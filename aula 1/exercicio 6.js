const prompt = require('prompt-sync')();
const secreto = 42;
let tentativas = 0;

while (true) {
    let numero = Number(prompt("Digite um número: "));
    tentativas++;

    if (numero === secreto) {
        console.log(`Parabéns! Você acertou o número secreto em ${tentativas} tentativa(s).`);
        break;
    } else if (numero < secreto) {
        console.log("O número secreto é maior.");
    } else {
        console.log("O número secreto é menor.");
    }
}