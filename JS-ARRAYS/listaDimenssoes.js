const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

console.log(funcionarios)

console.log(`Informaçoes sobre os funcionarios:
nome : ${funcionarios[0][0]}
idade: ${funcionarios[1][0]}            
faculade: ${funcionarios[2][0]} 

nome : ${funcionarios[0][1]}
idade: ${funcionarios[1][1]}            
faculade: ${funcionarios[2][1]} 


nome : ${funcionarios[0][2]}
idade: ${funcionarios[1][2]}            
faculade: ${funcionarios[2][2]}     
`)