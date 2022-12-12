const user ={
    nome:"Paulo",
    email:"p@ly.com",
    nascimento: "1992/07/22",
    role:"estudante",
    ativo:true,
    exibiInfos : function (){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome : "Mariana",
    email: " mariana@.com",
    role:"adim",
    criarCurso(){
        console.log('curso criado')
    }
}


Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibiInfos()
user.exibiInfos()


















/*user.exibiInfos()

//const exibir = user.exibiInfos
//exibir()

const exibir = function (){
    console.log(this.nome, this.email)
}
const exibirNome = exibir.bind(user)
exibirNome()
exibir()


function exibeInfos() {
    console.log(this.nome, this.email)
   }
   
   const user1 = {
    nome: 'Mariana',
    email: 'm@m.com'
   }
   
   exibeInfos.call(user1)



function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos = function(){
      console.log(this.nome, this.email)
    }
   }
   
   const newUser = new User('mariana', 'm@m.com')

   const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
   }
   
   newUser.exibeInfos() //mariana m@m.com
   newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com




function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const user = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
      fn.call(user, this.nome, this.email)
    }
   }
   
   user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com



   function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const user1 = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
      fn.apply(user1, [this.nome, this.email])
    }
   }
    user1.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com


let num1 = 1;
let num2  = 1;

//ReferenceError: Cannot access 'soma' before initialization
const soma =  (num1, num2) => {
 resul =  num1 + num2;
 return resul
 console.log(resul)//erro
}

*/


































/*let dataEHora = Date() // utilizando a chamada de função diretamente
console.log(dataEHora)
 // Mon Jan 31 2022 23:44:05 GMT-0300 (Brasilia Standard Time)
console.log(typeof dataEHora)
 // string

let dataEHora = new Date() // utilizando o construtor do objeto Date
console.log(dataEHora)
 // 2022-02-01T02:46:51.517Z
console.log(typeof dataEHora)
 // object
 
 
 let dataComConstrutor = new Date()
 let data1 = dataComConstrutor.getDate()
 console.log(data1) //31
 
 const objProduto = {
     tipo: "caneca",
     preco: 10,
     tamanho: {
       grande: '300ml',
       pequena: '120ml'
     },
     fragil: true,
     cores: ['preto', 'branco', 'azul']
    }
    console.log(objProduto)
 */






