function greeting(name) {
    alert('Olá ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Por favor insira seu nome.');
    callback(name);
  }
  
  processUserInput(greeting);

  //funcionou só no navegador
  