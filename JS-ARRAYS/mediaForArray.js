const notas = [10, 6.5, 8, 7.5]
let somaDasNostas = 0;

for(let i = 0; i < notas.length; i++){
   somaDasNostas += notas[i];
    
}

const media = somaDasNostas / notas.length;
console.log(`A média das notas é: ${media}`)