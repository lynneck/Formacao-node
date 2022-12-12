import User from "./User.js";

export default class Admim extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true)
    {
        super(nome, email, nascimento, role, ativo )
    }

    exibirInfos (){
        return `${this.nome}, ${this.role}, ${this.ativo}`
}


    criarCurso(nomeDoCurso, vagas){
        return ` Curso ${nomeDoCurso} criado com ${vagas} vagas`
    }
}




//console.log(novoAdmin)
//console.log(novoAdmin.exibirInfos())