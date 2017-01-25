var count = process.argv[2];
var string;

for (var i = 1; i <= count; i++) {
    string = '';

    if (i % 3 === 0) {
        string += 'fizz';
    }
    if (i % 5 === 0) {
        string += 'buzz';
    }
    if (!string) {
        string = i;
    }
    process.stdout.write(string + '\n');
}