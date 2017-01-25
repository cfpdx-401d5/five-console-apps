var x = +process.argv[2];
var y = +process.argv[3];

function powerOf(x, y) {
    return Math.pow(x, y);
};

process.stdout.write(powerOf(x, y).toString());