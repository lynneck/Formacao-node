import fs from 'fs';
import chalk from 'chalk';



function extrairLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura [2]}))

 return resultados.length !== 0 ? resultados : 'Não há links no arquivo';
}



function trataErro(erro){
    throw new Error (chalk.red(erro.code,'Não encontrei o arquivo no diretório!'))
}

async function pegaArquivo(caminhoDoArquivo){
 try{
     
     const encoding = 'utf-8';
     const texto = await fs.promises.readFile
     (caminhoDoArquivo, encoding)
     return extrairLinks(texto);

 }catch(erro){
    trataErro(erro)
 }finally {
    console.log(chalk.yellow('operação concluída'));
  }


}


export default pegaArquivo;



/*function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.promises
      .readFile(caminhoDoArquivo, encoding)
      .then ((texto) => console.log(chalk.green(texto)))
      .catch(trataErro)
}





function pegaArquivo(caminhoDoArquivo){

    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, Texto) => {
        if (erro){
            trataErro(erro);
         }
        console.log(chalk.green.bgWhite(Texto));
    })
}*/


 

// \(https?:\/\/[^\s?#.].[^\s]*\)

// \[[^[\]]*?\]

//\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)