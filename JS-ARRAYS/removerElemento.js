const notas = [10, 6, 8, 5.5, 10];
console.log(notas)
console.log(`Removendo o ultimo elemento do array que é o numero: ${notas[4]}`)
notas .pop();// remove o ultimo elento do array
notas.reverse();// inveti os elementos do array
console.log(`Nova lista do array depois da remoção ${ notas }`)

const media = (notas[0] + notas [1] + notas[2] + notas[3]) / notas.length;

console.log(`A média ${media}`)