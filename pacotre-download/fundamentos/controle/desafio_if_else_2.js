const nota = 6.7;

if (nota >= 9 && nota <= 10) {
    console.log('A');
} else if (nota >= 7 && nota <= 8.9) {
    console.log('B');
} else if (nota >= 5 && nota <= 6.9) {
    console.log('C');
} else if (nota >= 4.5 && nota <= 4.9) {
    console.log('D');
} else if (nota < 4.5 && nota >= 0) {
    console.log('F');
} else {
    console.log('Essa não é uma nota válida.')
}