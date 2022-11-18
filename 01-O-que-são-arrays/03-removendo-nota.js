const notas = [10, 6, 8, 5.5, 10];
//apagando a ultima nota
notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`a média é ${media}`)