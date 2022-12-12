const nomes = ['ana julia', 'Caio vinicius', 'BIA silvas']

// const nomePadronizado = nomes.map((nome) => {  // arrow funtion mais longa
//     return nome.toUpperCase();
// })

const nomePadronizado = nomes.map((nome) => nome.toUpperCase())//arrow function reduzida 

console.log(`Todos os nomes padronizados com letras maiúsculas:
${ nomePadronizado}`)