var x = parseInt(process.argv[2]);
var y = parseInt(process.argv[3]);

var poweredUp = function(x, y) {
  return Math.pow(x, y);
};

process.stdout.write(poweredUp(x, y).toString());