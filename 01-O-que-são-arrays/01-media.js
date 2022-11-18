// Calculando média

//const nota1 = 10;
//const nota2 = 6.5;
//const nota3 = 8;
//const nota4 = 7.5;

//         notas divididas pea quantidade que é / 4
//const media = (nota1 + nota2 + nota3 + nota4) / 4;


//--------------------------------------------------------------
//Calculando média com Array [listas]

//Posições     [0] [1] [2] [3]
const notas = [10, 6.5, 8, 7.5]
               // notas divididas pea quantidade que é / 4
//const media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

               // notas divididas pea quantidade que é / pela quantidade  
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media)
