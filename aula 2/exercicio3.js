const input = required("readline-sync");

const soma = (a,b) => a+b
const subtracao = (a,b) => a-b
const multiplicacao = (a,b) => a*b
const divisao = (a,b) => a/b
{
    if (b===0){
        return "Não pode dividir por zero"
    }
    return a/b
}
let a = input.questionFloat("Digite um número:")
let b = input.questionFloat("Digite outro número")

console.log('Soma:' +(a,b));
console.log('Subtração:' +(a,b));
console.log('Multiplicação:' +(a,b));
console.log('Divisão:' +(a,b));
