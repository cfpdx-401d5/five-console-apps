var name = process.argv[2];
var time = process.argv[3].split(':').map(function(item) {
    return parseInt(item);
});

if (5 <= time[0] && time[0] < 12) {
    process.stdout.write(`good morning ${name}`);
}

if (12 <= time[0] && time[0] < 17) {
    process.stdout.write(`good afternoon ${name}`);
}

if (17 <= time[0] && time[0] < 22) {
    process.stdout.write(`good evening ${name}`);
}

if (time[0] < 5 || 22 <= time[0]) {
    process.stdout.write(`go back to bed ${name}`);
}