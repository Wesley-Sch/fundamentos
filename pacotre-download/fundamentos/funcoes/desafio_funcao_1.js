const a = 3;
const b = 5;
const c = 24;
const d = 10;

function soma(a, b) {
    console.log(`O resultado é: ${a + b}`);
}

soma(a, b);
soma(a, d);

function sub(c, d) {
    console.log(`O resultado é: ${c - d}`);
}

sub(c, d);
sub(c, b);

// ou:

function somar(n1, n2) {
    console.log(n1 + n2);
}

function subtrair(n1, n2) {
    console.log(n1 - n2);
}

somar(3, 4);
somar(31, 98);

subtrair(11, 7);
subtrair(19, 52);