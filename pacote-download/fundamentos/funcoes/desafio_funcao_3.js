const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;
const media = (nota1 + nota3) / 2;

function statusDoAluno(media) {
    if (media >= 7 && media <= 10) {
        return 'Aprovado!'
    } else if (media >= 4 && media > 7) {
        return 'Recuperação!!'
    } else if (media >= 0 && media < 4) {
        return 'Infelizmente você foi reprovado...'
    }
}

console.log(statusDoAluno(media));