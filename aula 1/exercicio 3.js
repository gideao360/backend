const prompt = require('prompt-sync')();
let soma = 0;

for (let i = 1; i <= 5; i++) {
    let nota = Number(prompt(`Digite a ${i}ª nota: `));
    soma += nota;
}

let media = soma / 5;
console.log("Média:", media);

if (media >= 7) {
    console.log("Aluno Aprovado");
} else if (media >= 5) {
    console.log("Aluno em Recuperação");
} else {
    console.log("Aluno Reprovado");
}