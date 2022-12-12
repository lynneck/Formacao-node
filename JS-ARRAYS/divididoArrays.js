const alunos = ["João", "Paulo","Marcia", "Karla", "Daniel", 
"Fernado", "Caio", "Leudiane","Barbara", "Leticia", "Ademir",
"Ana", "Maria", "Antonia", "Jó", "Felipe", "Romario", "Ronaldo",
 "Kaka", "Lucas"]


 const sala1 = alunos.slice(0, alunos.length /2)//Dividindo array, nao altera o array original
 const sala2 = alunos.slice(alunos.length / 2) // Não precisa passar a posição final como parametro
console.log(sala1)
console.log(sala2)
console.log(alunos.length)