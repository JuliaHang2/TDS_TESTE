//CRUD
//CREATE 
//READER
//UPDATE
//DELETE

//ID, NOME, IDADE
const pessoas = [];
var idSeq = 1;


function cadastraPessoa(nome, idade){
    var pessoa = { id: idSeq++, nome: nome, idade: idade }
    pessoas.push(pessoa);
    return pessoa;
}

function consultaTodasAsPessoas(){
    return pessoas;
}

function deletaPessoa(id){
    //Pesquisar qual a posição do item no Arraylist
    for (let i = 0; i < pessoas.length; i++) {
        if(pessoas[i].id == id){
            console.log(pessoas[i]);
            pessoas.splice(i, 1); //Deleta o item do Arraylist
        }
    }

   
};

function consultaPessoaID(id){

    return pessoas.filter(item => item.id == id);

}

function atualizaPessoa(id,nome,idade){
  var teveRetorno = true;  
  for (let i = 0; i < pessoas.length; i++) {
    if(pessoas[i].id == id){
        pessoas[i].nome = nome;
        pessoas[i].idade = idade;
        return pessoas[i];
    } else {
        teveRetorno = false;
    }
  }
  
  if (!teveRetorno){
    return "O código da pessoa é inválido!";
  }

}

module.exports = {
    cadastraPessoa,
    deletaPessoa,
    consultaTodasAsPessoas,
    consultaPessoaID,
    atualizaPessoa
}

// (cadastraPessoa("Julia", 17));
// (cadastraPessoa("Larissa", 17));
// (cadastraPessoa("Moreira", 17));
// console.log(consultaTodasAsPessoas());