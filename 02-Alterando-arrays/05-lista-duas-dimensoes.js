//                [0]        [1]      [2]    [3]
const alunos = ["Thiago", "Juliana", "Ana", "Caio"];
//             [0] [1] [2] [3]
const medias = [10, 8, 7.5, 9];

//                             [0]     [1]
const listaAlunosComMedias = [alunos, medias];

//console.log(listaAlunosComMedias)

console.log(`O melhor aluno do curso é: ${listaAlunosComMedias[0][0]} e sua média é ${listaAlunosComMedias[1][0]}`)