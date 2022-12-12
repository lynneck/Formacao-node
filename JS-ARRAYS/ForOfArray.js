const notas = [10, 6.5, 8, 7.5]

let somaDasnotas = 0;

for (let nota of notas) {
    somaDasnotas +=nota;
 
}

const media =somaDasnotas / notas.length;

console.log(`A média das notas é: ${media}`)