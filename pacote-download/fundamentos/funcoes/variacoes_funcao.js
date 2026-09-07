// #01: Funcao COM parametros e COM retorno
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(`Resultado final: ${resultado}`);
console.log(`Resultado final: ${somar(30, 56)}`);

// #02: Funcao COM parametros e sem retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);

// #03: Funcao SEM parametros e COM retorno
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual());

// #04: Funcao SEM parametros e SEM retorno
function exibirHoraAtual() {
    console.log(new Date(). getHours());
}

exibirHoraAtual();