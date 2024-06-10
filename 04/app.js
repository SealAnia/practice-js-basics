const randomArray = createArray();
console.log(randomArray);

getMinValue(randomArray);
getMaxValue(randomArray);
getAverageValue(randomArray);
getTenLargestNumbers(randomArray);

function createArray() {
    const arr = [];
    const len = 20;
    for(let i = 0; i < len; i++) {
        arr.push(getRandomInteger(1, 100));
    }

    return arr;
}

function getRandomInteger(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

function getMinValue(array) {
    var min = array[0];
    for(var i = 0; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i];
        }
    }
    console.log('MINIMUM: ' + min);
    return min;
}

function getMaxValue(array) {
    var max = array[0];
    for(var i = 0; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i];
        }
    }
    console.log('MAXIMUM: ' + max);
    return max;
}

function getAverageValue(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    var avg = sum / array.length
    console.log('AVERAGE' + avg);
    return avg;
}

function getTenLargestNumbers(array) {
    array = array.sort((a, b) => a - b);
    console.log(array);
    console.log(array.slice(10, 19));
    return array.slice(10, 19)
}