function executarOperacao(a, b, operacao) {
    const resultado = operacao(a, b);
    console.log('Resultado da operação: ${resultado}');
}

executarOperacao(10, 3, (a, b) => a + b); 
executarOperacao(10, 3, (a, b) => a * b); 
executarOperacao(10, 3, (a, b) => a - b); 