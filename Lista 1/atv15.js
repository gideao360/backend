const produtos = [
    { id: 1, nome: "Tẽnis nike", preco: 459.99 },
    { id: 2, nome: "Calça Fate", preco: 399.99 },
    { id: 3, nome: "Cueca Zorba", preco: 50.00 },
    { id: 4, nome: "Camisa Polo Tommy Hilfiger", preco: 349.90 },
    { id: 5, nome: "Boné New Era", preco: 299.90 }
];

const produtoId3 = produtos.find(p => p.id === 3);
console.log("=== a) Produto com id 3 ===");
console.log(produtoId3);

const acimaDe100 = produtos.filter(p => p.preco > 100);
console.log("\n=== b) Produtos com preço acima de R$ 100 ===");
console.log(acimaDe100);

const nomes = produtos.map(p => p.nome);
console.log("\n=== c) Nomes dos produtos ===");
console.log(nomes);

console.log("\n=== d) Catálogo completo ===");
produtos.forEach(p => {
  const precoFormatado = p.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  console.log(`[ID ${p.id}] ${p.nome} — ${precoFormatado}`);
});