/*function User (nome, email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function (){
        return ` ${ this.nome}, ${ this.email}`
    }
}

const novoUser = new User ('Paulo', 'p@l.com')

const novoUser2 = new User ('Paulinho', 'p@linho.com')
const novoUser3 = new User ('Pauli', 'p@linho.com')
console.log(novoUser.exibirInfos())
console.log(novoUser2.exibirInfos())
console.log(novoUser3.exibirInfos())

function Admim (role){
    User.call(this, 'Juliana', 'ju@.com')
    this.role = role || 'estudante'
}


Admim.prototype = Object.create(User.prototype)
const novoUser =  new Admim ('admin')
console.log(novoUser.exibirInfos())
console.log(novoUser.role)*/



