const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof(a));
console.log(typeof(b));

console.log(typeof(a) === 'string');

var sum = turnStringIntoFloat(a) + turnStringIntoFloat(b);
var difference = turnStringIntoFloat(a) - turnStringIntoFloat(b);;
var multiplication = turnStringIntoFloat(a) * turnStringIntoFloat(b);;
var division = turnStringIntoFloat(a) / turnStringIntoFloat(b);;

console.log(sum + ' > 20 = ' + moreThanTwenty(sum));
console.log(difference + ' > 20 = ' + moreThanTwenty(difference));
console.log(multiplication + ' > 20 = ' + moreThanTwenty(multiplication));
console.log(division + ' > 20 = ' + moreThanTwenty(division));

function turnStringIntoFloat(x) {
    if(typeof(x) == 'string') {
        return parseFloat(x);
    }
    return x;
}

function moreThanTwenty(x) {
    return x > 20;
}