const pessoa = require("./pessoa");

pessoa.cadastraPessoa("Julia", 17)
pessoa.cadastraPessoa("Larissa", 17)
pessoa.cadastraPessoa("Moreira", 17)


//Mostra todas as pessoas
console.log(pessoa.consultaTodasAsPessoas());

//Deleta a pessoa e mostra a lista atualizada
pessoa.deletaPessoa(2);
console.log(pessoa.consultaTodasAsPessoas());

//Consulta a pessoa pelo ID
console.log(pessoa.consultaPessoaID(1));

//Atualiza a pessoa e mostra a lista atualizada
pessoa.atualizaPessoa(1, "Júlia Hang", 17);
console.log(pessoa.consultaTodasAsPessoas());


   