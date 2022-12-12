const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma)
console.log(soma/numeros.length) //170

// outras formas de resolver o mesmo problema  ultilizando o metodo REDUCE


// const soma1 = numeros.reduce(function (acc, atual) {
//     return atual + acc
//    }, 0)


//    function operacaoNumerica(acc, atual) {
//     return atual + acc
//    }
   
//    const soma2 = numeros.reduce(operacaoNumerica, 0)


//    É importante lembrar que cada método pode aceitar receber 
//    parâmetros diferentes! Alguns são obrigatórios,
//    outros opcionais. Consulte sempre a documentação da linguagem.