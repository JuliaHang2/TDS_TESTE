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

module.exports = {
    cadastraPessoa,
    deletaPessoa,
    consultaTodasAsPessoas
}

// (cadastraPessoa("Julia", 17));
// (cadastraPessoa("Larissa", 17));
// (cadastraPessoa("Moreira", 17));
// console.log(consultaTodasAsPessoas());