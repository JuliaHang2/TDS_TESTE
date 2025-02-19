const pessoa = require("./pessoa");

pessoa.cadastraPessoa("Julia", 17)
pessoa.cadastraPessoa("Larissa", 17)
pessoa.cadastraPessoa("Moreira", 17)



console.log(pessoa.consultaTodasAsPessoas())
pessoa.deletaPessoa(2)
console.log(pessoa.consultaTodasAsPessoas())
console.log(pessoa.consultaPessoaPeloID(1))

   