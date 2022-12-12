import User from "./User.js";
import Admim from "./Admin.js";
import Docente from "./Docente.js";





const novoDocente = new Docente('Márcia', 'marcia@uol.com', '1971.05.01')
console.log(novoDocente.exibirInfos())


//const novoUser = new User ('mariana', 'm@m.com', '2002.01.01')
//console.log(novoUser.#montaObjUser())
//console.log(novoUser.exibirInfos())


/*const novoAdmin = new Admim ('Rodrigo', 'r@r.com', '2001.01.04')
console.log(novoAdmin.nome,novoAdmin.email)
novoAdmin.nome = ''
novoAdmin.email = 'a@d.com'
console.log(novoAdmin.nome, novoAdmin.email)

const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome) //'Juliana'
novoUser.nome = 'Juliana Silva Souza'
console.log(novoUser.nome) //'Juliana'
console.log(novoUser.sobrenome) //'Silva Souza'*/