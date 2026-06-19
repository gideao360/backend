function calcular(a, b, operacao){
    return operacao (a, b)
}
const somar = (a, b) => a+b;
const diminuir = (a,b) => a-b;
const multiplicar = (a,b) => a*b;
const dividir = (a,b) => a/b;

console.log(calcular(10, 5,somar));
console.log(calcular(10, 5, diminuir));
console.log(calcular(10, 5, multiplicar));
console.log(calcular(10, 5, dividir));

