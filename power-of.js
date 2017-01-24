var x = process.argv[2];
var y = process.argv[3];

var powerOf = Math.pow(Number(x), Number(y));

process.stdout.write(String(powerOf));
