const notas =[7, 7, 8, 9]
// quando é atruido uma constante recebe um array de notas 
// eles passam a opontar para o mesmo endereço dna memória
//se eu alterar o array original a const será alterada também e vice e versa


// const novasNotas = notas;

// novasNotas.push(10);
// notas.push(5);


// console.log(`As novas notas são ${novasNotas}`)// os valores permanece o mesmos nos dois arrays
// console.log(`As novas notas são ${notas}`)

const novasNotas = [...notas];// usando operador de espalhamento
const novasNotas2 = [6, ...novasNotas, 15] //colocando um novo elemento no inicio e fim do array
//copia o array de notas em um novo array independente 
//se houve alguma alteração no array de novaNotas não modificarar o array original - notas
novasNotas.push(10);



console.log(`As novas notas são ${novasNotas}`)
console.log(`As novas notas original são ${notas}`)
console.log(`As novas notas atualizadas ${novasNotas2}`)

