const notas = [10.0, 10.0, 1.0, 7.0];

function exibirMedia(acc, atual){
       return atual + acc
    }
    

const soma = notas.reduce(exibirMedia, 0);// exibirMedia é o primeiro parametro da função recuce e 0 é segundo 
const mediaSala = soma / notas.length;

console.log(soma);
console.log(`Média da sala ${mediaSala}`);

// const soma = numeros.reduce(function (acc, atual) {
//     return atual + acc
//    }, 0)
 // outra forma de ultilizar reduce







/*var arr = [1,2,3,4,5,6,7,8,9,10];
var soma = 0;

for(var i = 0; i < arr.length; i++) {
    soma += arr[i]/4;
}

console.log(soma);*/