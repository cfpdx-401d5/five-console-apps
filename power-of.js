// power-of

// Returns first argument to the power of the second argument

// > node power-of.js 3 3
// 27

var base = Number(process.argv[2]);
var exponent = Number(process.argv[3]);

process.stdout.write(String(Math.pow(base, exponent)));