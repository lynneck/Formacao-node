const alunos = ["João", "Juliana", "Ana", "Caio"]
const notas = [10, 8, 9, 7]


const listaDeAlunosEMedias = [alunos, notas]

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){
        console.log(`${aluno} está cadrastrado`)
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);

    console.log( `Posição no array: ${indice}`)
        const mediaDoAluno = listaDeAlunosEMedias[1][indice] 
        console.log(`${aluno} tem a media ${mediaDoAluno}`)
        if(mediaDoAluno === 7){
            console.log("Você passou pelo fio de um gato")
        }

    }else{
        console.log("Aluno não esta cadrastrado")
    }
}

exibeNomeENota("Caio");