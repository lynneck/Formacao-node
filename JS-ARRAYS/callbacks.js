const nomes = ["Evaldo", "Mari", "Camis"]

// nomes.forEach(function(nome){
//     console.log(nome
//         )
// })

// nomes.forEach((nome)=>{
//     console.log(nome)
// })

function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome)


const lista = [1, 2, 3, 4, 5];

for (let i = 0, j = 0; i < lista.length; i++, j++) {
 console.log(lista[i] + j); 
}

//1
//3
//5
//7
//9


const lista1 = [1, 2, 3, 4, 5];
let soma = 0;

lista1.forEach(numero => soma += numero);
console.log(soma) //15