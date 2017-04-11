var x = [];

for(i = 2; i < process.argv.length; i++) {
    x.push(parseInt(process.argv[i]));
}

var sum = x.reduce(function(a, b) {
    return a + b;
}, 0);

var avg = sum / (process.argv.length - 2);

process.stdout.write(avg.toString());



