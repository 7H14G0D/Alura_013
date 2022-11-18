const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

//removendo Ana e Caio
nomes.splice(1, 2);
//adicionando Thiago
nomes.push("Thiago");

//No mesmo cod pode remover e adicionar
//nomes.splice(1, 2, "Thiago");

console.log(nomes)