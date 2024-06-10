
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');

for(var i = 1; i <=9; i++) {
    console.log(multiply(x, i));
}

function multiply(i, y) {
    return i * y;
}

/* rozwiązanie z pętlą while  */

var a = 1;

while(a <= 9) {
    console.log(multiply(a, x));
    a++;
}