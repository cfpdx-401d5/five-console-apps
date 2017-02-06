var count = 0;

for ( var i = 2; i < process.argv.length; i++) {
    count += parseInt(process.argv[i]);
}

var avg = count/(process.argv.length - 2);

process.stdout.write(`${avg}` + '\n');
