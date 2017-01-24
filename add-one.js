// add-one

// Adds 1 to first argument

// > node add-one.js 3
// 4

var num = process.argv[2];
var addOne = Number(num) + 1;

process.stdout.write(String(addOne)); // why does it print '%' after the output?