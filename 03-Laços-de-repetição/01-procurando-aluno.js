// Arquivo procurando-aluno.js
//                [0]        [1]      [2]    [3]
const alunos = ["Thiago", "Juliana", "Ana", "Caio"];
//             [0] [1] [2] [3]
const medias = [10, 8, 7.5, 9];
//                             [0]     [1]
const listaDeAlunosEMedias = [alunos, medias];

// ...

function exibeNomeENota(aluno){
  if (listaDeAlunosEMedias[0].includes(aluno)) {

      const [alunos, medias] = listaDeAlunosEMedias;

      const indice = alunos.indexOf(aluno);

      const mediaDoAluno = medias[indice];

      console.log(`${aluno} tem a média ${mediaDoAluno}.`);

  } else {
      console.log("Aluno não encontrado!");
  }
}

exibeNomeENota("Thiago");