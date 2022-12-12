const alunos = ["João", "Juliana", "Ana", "Caio"]
const notas = [10, 8, 9, 7]


const listaDeAlunosEMedias = [alunos, notas]

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){

        console.log(`${aluno} está cadrastrado`)
        //const alunos = listaDeAlunosEMedias[0]
        //const media = listaDeAlunosEMedias[1]

        const [alunos, media] = listaDeAlunosEMedias // outra maneira de declarar constantes, chamamos de destructuring

        const indice = alunos.indexOf(aluno);   
        console.log( `Posição no array: ${indice}`)
         
        const mediaDoAluno = media [indice] 
        console.log(`${aluno} tem a media ${mediaDoAluno}`)
        if(mediaDoAluno === 7){
            console.log("Você passou pelo fio de um gato")
        }

    }else{
        console.log("Aluno não esta cadrastrado")
    }
}

exibeNomeENota("Caio");