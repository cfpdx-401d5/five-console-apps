var n = parseInt(process.argv[2]);
var array = [];

for ( var i = 1; i <= n; i++ ) {
    if (i % 3 === 0 && i % 5 ===0) {
        array.push('fizzbuzz' + '\n');
    } else if (i % 3 === 0) {
        array.push('fizz' + '\n');
    } else if (i % 5 === 0) {
        array.push('buzz' + '\n');
    } else {
        array.push(i + '\n');
    }
}

var result = array.join('');

process.stdout.write(`${result}`);