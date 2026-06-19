function range(inicio, fim){
    const lista =[]
    for(let i=inicio; i<= fim; i++){
        lista.push(i);
    }
    return lista;
}
function soma(lista){
    let total = 0;
    for(let i = 0; i<= lista.length;i++){
        total += lista[i];
    }
    return total;
}
console.log(range(100, 1000));
console.log(soma(range(1, 10)));