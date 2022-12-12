
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0
let soma = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
       soma += notasGerais[i][j]
      media += notasGerais[i][j]/notasGerais[i].length; //aqui ele soma a media dos tres arrays que da 24
      console.log(soma)//mostra a soma de todos os elementos do arrays = 71
    }
  }

  media =media/notasGerais.length// exibe a media geral dos tres arrays

  console.log(media)














/*const notas = [10, 8, 9, 5];
let media = 0;


for (let i = 0; i < notas.length; i++) {
 media += notas[i]/notas.length;
}


console.log(`A média do aluno é : ${media}`)


const notas = [10, 6.5, 8 ,7.5]
let media = 0

for (let i = 0; i < notas.length; i++) {
  media += notas[i]/notas.length;
}

console.log(media)*/