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
    var index = pessoas.findIndex(pessoa => pessoa.id == id);
    if(index != -1){
        pessoas.splice(index,1);
        return true;
    }
    return false;
}

module.exports = {
    cadastraPessoa,
    deletaPessoa,
    consultaTodasAsPessoas
}

// (cadastraPessoa("Julia", 17));
// (cadastraPessoa("Larissa", 17));
// (cadastraPessoa("Moreira", 17));
// console.log(consultaTodasAsPessoas());