

// Soma de dois valores
function somaDeDoisValores(a,b) {
    return a + b;
};
console.log("A soma de 8 e 2 é:", somaDeDoisValores(8,2));


// Multiplicação de dois valores
function multiplicacaoDeDoisValores(a,b) {
    return a * b;
};
console.log("A multiplicação de 5 e 2 é:", multiplicacaoDeDoisValores(5,2));


// Divisão de dois valores
function divisaoDeDoisValores(a,b) {
    return a/b;
};
console.log("A divisão de 20 por 2 é:", divisaoDeDoisValores(20,2));

//Trabalhando com array List
const data = [];

data.push(1);
data.push(2);
data.push(3);
data.push(4);
data.push(5);

console.log(data);

data.splice(4,1);

console.log(data);


//Utilizando objetos
const pessoa = {
    id: 1,
    nome: "Julia",
    idade: 17
}

console.log(pessoa);
console.log(pessoa.nome);