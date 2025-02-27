const clientes = [];
var idSeq = 1;


function cadastraCliente(nome, cpf){
    var cliente = { id: idSeq++, nome: nome, cpf: cpf }
    clientes.push(cliente);
    return cliente;
}

function consultaTodosOsClientes(){
    return clientes;
}

function deletaCliente(id){
    
    for (let i = 0; i < clientes.length; i++) {
        if(clientes[i].id == id){
            // console.log(clientes[i]);
            clientes.splice(i, 1); 
        }
    }

   
};

function consultaClienteID(id){

    return clientes.filter(item => item.id == id);

}

function atualizaCliente(id,nome,cpf){
  var teveRetorno = true;  
  for (let i = 0; i < clientes.length; i++) {
    if(clientes[i].id == id){
        clientes[i].nome = nome;
        clientes[i].cpf = cpf;
        return clientes[i];
    } else {
        teveRetorno = false;
    }
  }
  
  if (!teveRetorno){
    return "O código do cliente é inválido!";
  }

}

module.exports = {
    cadastraCliente,
    deletaCliente,
    consultaTodosOsClientes,
    consultaClienteID,
    atualizaCliente
}