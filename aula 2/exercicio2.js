const input = require("readline-sync");
function validarSenha(senha){
    if(senha.length<8){
        return "A senha deve conter pelo menos 8 caracterres";
    }
    if(!/[a-z]/.test(senha)){
        return "A senha deve conter pelo menos uma letra minúscula";
    }
    if(!/[A-Z]/.test(senha)){
        return "A senha deve conter pelo menos uma letra minúscula";
    }
    if(!/[1-9]/.test(senha)){
        return "A senha deve conter pelo menos um número";
    }
    if(!/[^A-Za-z0-9]/.test(senha)){
        return "A senha deve conter pelo menos um caracter especial";
    }
    return "Senha válida";
}
let senha = input.question("Digite a senha:");
console.log(validadarSenha(senha));







