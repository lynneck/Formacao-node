const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro' ]
const medias = [7, 4.5, 8, 7.5]

// logicaa do filter sempre tem que retonar vedadeiro ou falso e gera um novo array
const aprovados = alunos.filter((_, indice)=> {// é necessario nomear o primeiro parametro (aluno) para acessar o segundo(indice)
    return medias[indice] >= 7;
})//lista de alunos


const reprovados = alunos.filter((_, indice)=> {
    return medias[indice] < 7;
})//lista de alunos


console.log(`Alunos aprovados: ${aprovados}
Alunos reprovados: ${reprovados}`)

//  Quando a função callback retorna verdadeiro,
//  ou true, o elemento é adicionado no array de retorno,
//  e quando ela retorna falso, ou false, o elemento é descartado
