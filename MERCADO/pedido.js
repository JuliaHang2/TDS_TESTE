const pedidos = [];
var idSeq = 1;


function cadastraPedido(id_produto, id_cliente, quantidade, total){
    var pedido = { id: idSeq++, id_produto: id_produto, id_cliente: id_cliente, quantidade: quantidade, total: total};
    pedidos.push(pedido);
    return pedido;
}

function consultaTodosOsPedidos(){
    return pedidos;
}

function deletaPedido(id){
    
    for (let i = 0; i < pedidos.length; i++) {
        if(pedidos[i].id == id){
            // console.log(pedidos[i]);
            pedidos.splice(i, 1); 
        }
    }

   
};

function consultaPedidoID(id){

    return pedidos.filter(item => item.id == id);

}

function atualizaPedido(id,id_cliente,id_produto,quantidade,total){
  var teveRetorno = true;  
  for (let i = 0; i < pedidos.length; i++) {
    if(pedidos[i].id == id){
        pedidos[i].id_cliente = id_cliente;
        pedidos[i].id_produto = id_produto;
        pedidos[i].quantidade = quantidade;
        pedidos[i].total = total;
        return pedidos[i];
    } else {
        teveRetorno = false;
    }
  }
  
  if (!teveRetorno){
    return "O código do pedido é inválido!";
  }

}

module.exports = {
    cadastraPedido,
    deletaPedido,
    consultaTodosOsPedidos,
    consultaPedidoID,
    atualizaPedido
}