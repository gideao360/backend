const readlineSync = require("readline-sync");
let numero = parseInt(readlineSync.question("Digite um número: "));
for (let i = numero; i >= 1; i--) {
  console.log(i);
}
console.log("Fim");