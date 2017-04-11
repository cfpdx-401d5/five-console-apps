//timely greeting
var timeIs = Number(process.argv[3]);
var nameIs = process.argv[2];

var timePhrase;

// pick the right timePhrase
if (timeIs < 1200) {
    timePhrase = 'morning';
} else if (timeIs <= 1700) {
    timePhrase = 'afternoon';
} else if (timeIs > 1700) {
    timePhrase = 'evening'
}


var msg = 'good ' + timePhrase + ' ' + nameIs;
process.stdout.write(`${msg}`);