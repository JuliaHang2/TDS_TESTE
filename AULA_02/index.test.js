const index = require('./index');


test("Soma de dois valores",()=>{
    expect(index.soma(1,1)).toBe(2);
});


test("Multiplicação de dois valores",()=>{
    expect(index.multiplicacao(2,2)).toBe(4);
}); 

test("Divisão de dois valores",()=>{                                                                                  
    expect(index.divisao(2,2)).toBe(1);
});

test("Subtração de dois valores",()=>{
    expect(index.subtracao(2,2)).toBe(0);
}); 

test("Retorno da pessoa", ()=>{
    expect(index.pessoa()).toEqual({id: 1, nome: "Julia", idade: 17});
});


