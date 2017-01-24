var count = parseInt(process.argv[2]);
var string = '';

for (var i = 1; i <= count; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
        string += i;
    }
    if (i % 3 === 0) {
        string += 'fizz';
    }
    if (i % 5 === 0) {
        string += 'buzz';
    }
    string += ', ';
}


string = string.replace(/,\s*$/, "");

process.stdout.write(`${string}`);