const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let numero = 8; numero >= 0; numero -= 2) {
    console.log(numeros[numero]);
}

// OU

for(let numero = numeros.length - 2; numero >= 0; numero -= 2) {
    console.log(numeros[numero]);
}