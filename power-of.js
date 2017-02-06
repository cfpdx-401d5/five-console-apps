// returns first argument to the power of the second argument
var x = parseInt(process.argv[2]);
var y = Math.pow(x, parseInt(process.argv[3]));
process.stdout.write(`${y}`);