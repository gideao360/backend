function reverte(array){
    const resultado =[];
    for(let i = array.length - 1; i >= 0; i--){
        resultado.push(array[i]);
    }
    return resultado;
}
console.log(reverte([1, 2, 3, 4, 5]));