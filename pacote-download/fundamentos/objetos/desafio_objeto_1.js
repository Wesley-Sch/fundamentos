const data = {
    dia: 9,
    mes: 6,
    ano: 2008,
    exibir: function() {
        return (`${this.dia}/${this.mes}/${this.ano}`)
    }
};

console.log(data.exibir())