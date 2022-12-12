import chalk from "chalk";
import { Console } from "console";
import fs from 'fs';
import pegaArquivo from "./index.js";
import listaValidada from "./http-validacao.js";


const caminho = process.argv;


async function imprimeLista(valida, resultado, identificaodr = ''){
    if(valida){
        console.log(
            chalk.yellow('Lista validada'),
            chalk.black.bgGreen(identificaodr),
            await listaValidada (resultado));

    }else {
        
        console.log(
            chalk.yellow('Lista de links'),
            chalk.black.bgGreen(identificaodr),
            resultado);

    }    

}


async function processaTexto(argumentos){
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';

    try{
      fs.lstatSync(caminho);

    } catch (erro) {
        if(erro.code === 'ENOENT'){
            console.log('Arquivo não encontrado');
            return;

        }
    }

    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo (argumentos[2]);
        imprimeLista(valida, resultado);

    }else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async(nomeDeArquivos) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivos}`)
            imprimeLista(valida, lista,nomeDeArquivos);

        })
       
    }


}

processaTexto(caminho);
