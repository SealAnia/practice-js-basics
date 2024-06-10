const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const sum = getSum(a, b, c);

const even = isEven();

showInfo(sum, even);

function getSum(d, e, f) {
    let numbers = [d, e, f];
    numbers.sort((x, y) => y - x);
    numbers = numbers.slice(0, 2);
    console.log(numbers);
    console.log(numbers[0] + numbers[1]);
    return numbers[0] + numbers[1];
}

function isEven() {
    const x = prompt('Type anything');
    const y = parseInt(x);
    if(isNaN(y)) {
        return null;
    }
    else {
        return y % 2 == 0;
    }
}

function showInfo(a, b) {
    console.log(a % 2 == 0);
    console.log(isEven());
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}