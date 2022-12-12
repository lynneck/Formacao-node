const listaLivros = require('./arrayOrdenado');

function busca (array, de, ate, valorBuscado) {

    console.log('de, para', de, ate)
    const meio = Math.floor((de + ate) / 2);

    const atual = array[meio];

    if(de > ate){
        return -1;

    }

    if (valorBuscado === atual.preco){
        return meio;
    }

    // if(valorBuscado !== atual.preco){
    //     console.log('O preço que foi passado nao consta no array, verique a lista e digite um valor valido')
    //     return array;
    // }

if(valorBuscado < atual.preco){
    return busca (array, de, meio -1, valorBuscado)

}

if(valorBuscado > atual.preco){
    return busca (array, meio + 1, ate, valorBuscado)
    
}
}

console.log(busca(listaLivros, 0, listaLivros.length -1, 29))