const input = require('readline-sync');

function podeVotar(idade){
    return idade >=16
}

const idade = Number(input.question('Digite sua idade:'));
if(podeVotar(idade)){
    console.log('Você pode votar')
}else{
    console.log('Calmae desesperado por votar, espere a próxima eleição')
}

12