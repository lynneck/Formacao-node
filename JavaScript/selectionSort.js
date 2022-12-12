const livros = require ('./listaLivros');
const menorValor = require  ('./menorValor');

for (let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual)
    
    let livroAtual = livros[atual];
    console.log('Posição atual', atual)
    console.log('livro atual', livros[atual])
    let livroMenorPreço = livros [menor];
    console.log('livro menor preço', livros[menor])
    livros[atual]=livroMenorPreço
    livros[menor]= livroAtual
}
 console.log(livros)

