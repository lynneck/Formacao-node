const notas =  [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {

    return nota + 1 >= 10 ? 10 : nota + 1;
    // if(nota === 10){
    //     return nota ;
    // }
    //    if(nota === 9.5) {
    //     return nota + 0.5;
    // }else {
    //     return nota + 1
    // }

})

console.log(notasAtualizadas)