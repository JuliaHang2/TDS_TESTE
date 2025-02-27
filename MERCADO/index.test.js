const produto = require ('./produto');
const cliente = require ('./cliente');
const pedido = require ('./pedido');

test ('Cadastra um produto', () => {
    expect(produto.cadastraProduto('Macarrao', 5)).toEqual({ id: 1, nome: 'Macarrao', preco: 5 });
} );    

test ('Cadastra um cliente', () => {
    expect(cliente.cadastraCliente('Joao', '12345678901')).toEqual({ id: 1, nome: 'Joao', cpf: '12345678901' });
} );        

test ('Cadastra um pedido', () => {
    expect(pedido.cadastraPedido(1, 1, 2, 10)).toEqual({ id: 1, id_produto: 1, id_cliente: 1, quantidade: 2, total: 10 });
} );

test ('Consulta produtos', () => {
    expect(produto.consultaTodosOsProdutos()).toEqual([{ id: 1, nome: 'Macarrao', preco: 5 }]);
});

test ('Consulta clientes', () => {
    expect(cliente.consultaTodosOsClientes()).toEqual([{ id: 1, nome: 'Joao', cpf: '12345678901' }]);
});

test ('Consulta pedidos', () => {
    expect(pedido.consultaTodosOsPedidos()).toEqual([{ id: 1, id_produto: 1, id_cliente: 1, quantidade: 2, total: 10 }]);
});

test ('Atualiza cliente', () => {    
    expect(cliente.atualizaCliente(1, 'Julia', '12345678901')).toEqual({ id: 1, nome: 'Julia', cpf: '12345678901' });
});

test ('Atualiza produto', () => {
    expect(produto.atualizaProduto(1, 'Arroz', 3)).toEqual({ id: 1, nome: 'Arroz', preco: 3 });  
});

test ('Atualiza pedido', () => { 
    expect(pedido.atualizaPedido(1, 1, 1, 4, 20)).toEqual({ id: 1, id_produto: 1, id_cliente: 1, quantidade: 4, total: 20 });
});

test ('Consulta produto por ID', () => {    
    expect(produto.consultaProdutoID(1)).toEqual([{ id: 1, nome: 'Arroz', preco: 3 }]);
});

test ('Consulta cliente por ID', () => {
    expect(cliente.consultaClienteID(1)).toEqual([{ id: 1, nome: 'Julia', cpf: '12345678901' }]);
});

test ('Consulta pedido por ID', () => {
    expect(pedido.consultaPedidoID(1)).toEqual([{ id: 1, id_cliente: 1, id_produto: 1, quantidade: 4, total: 20 }]);
});

test ('Deleta pedido', () => {  
    expect(pedido.deletaPedido(1)).toEqual(undefined);
});

test ('Deleta cliente', () => {  
    expect(cliente.deletaCliente(1)).toEqual(undefined);
});

test ('Deleta produto', () => {  
    expect(produto.deletaProduto(1)).toEqual(undefined);
});



