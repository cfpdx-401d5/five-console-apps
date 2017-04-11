//receive unknown number of vars 
var arguments = process.argv;

var operands = arguments.slice(2);
var numArray = [];

function numbers(element, index, array) {
    numArray[index] = Number(element);
}
operands.forEach(numbers);

var sum = numArray.reduce(function(a, b) {
    return a + b;
}, 0);

var avg = sum / numArray.length;

process.stdout.write(`${ avg }`);