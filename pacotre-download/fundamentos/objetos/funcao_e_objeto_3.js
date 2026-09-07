// Funcao Construtora -> Objeto
function Data(dia = 1, mes = 1, ano = 2021) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function() {
        return `${dia}/${mes}/${ano}`;
    }
}

const d1 = new Data();
const d2 = new Data(24, 12, 2023);
const d3 = new Data(10, 11, 2022);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

console.log(d1);
console.log(d2);
console.log(d3);