let a = 7;
let b = 94; // depois da troca... a = 94 e b = 7

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

// ou:

a = 94;
b = 7;

console.log(a);
console.log(b);

// outra forma de trocar os valores
/*[a, b] = [b, a];

console.log(a);
console.log(b);*/