const livros = require ('./listaLivros');

function menorValor(arrProdutos, posicaoInicial){   
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual
        }
} 
    return maisBarato;

}

module.exports = menorValor

    

 /*let maisCaro = 0;
 for (let i = 0; i < livros.length; i++){
    if(livros[i].preco > livros [maisCaro].preco){
        maisCaro = i 
    }
 }    

 console.log (
`o livro mais caro custa ${livros[maisCaro].preco} reais
 e o titulo é ${livros[maisCaro].titulo}`)*/