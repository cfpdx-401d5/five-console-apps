var name = process.argv[2];
var greeting = '';
var time = parseInt(process.argv[3].split(':')[0]);

if (time < 12) {
    greeting = 'good morning ';
} else if (time >= 17) {
    greeting = 'good evening ';
} else {
    greeting = 'good afternoon ';
}

process.stdout.write(`${greeting}` + `${name}`);

