// Duas expressões resultar em TRUE (Aritimétios/Relacionais/Lógicos)
let a = 2;
let b = 5;
let c = 10;

let verdadeira1 = (a + b < c) && (c - b > a);
let verdadeira2 = (b + c > a) || (a + c < b);

console.log(verdadeira1);
console.log(verdadeira2);

// Duas expressões resultar em FALSE (Aritimétios/Relacionais/Lógicos)
let falso1 = (a + c < b) && (b + a > c);
let falso2 = (c / a >= b) != (b * a <= c);

console.log(falso1);
console.log(falso2);