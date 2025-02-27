const produtos = [];
var idSeq = 1;


function cadastraProduto(nome, preco){
    var produto = { id: idSeq++, nome: nome, preco: preco }
    produtos.push(produto);
    return produto;
}

function consultaTodosOsProdutos(){
    return produtos;
}

function deletaProduto(id){
    
    for (let i = 0; i < produtos.length; i++) {
        if(produtos[i].id == id){
            // console.log(produtos[i]);
            produtos.splice(i, 1); 
        }
    }

   
};

function consultaProdutoID(id){
    return produtos.filter(item => item.id == id);

}

function atualizaProduto(id,nome,preco){
  var teveRetorno = true;  
  for (let i = 0; i < produtos.length; i++) {
    if(produtos[i].id == id){
        produtos[i].nome = nome;
        produtos[i].preco = preco;
        return produtos[i];
    } else {
        teveRetorno = false;
    }
  }
  
  if (!teveRetorno){
    return "O código do produto é inválido!";
  }

}

module.exports = {
    cadastraProduto,
    deletaProduto,
    consultaTodosOsProdutos,
    consultaProdutoID,
    atualizaProduto
}