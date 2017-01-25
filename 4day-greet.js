var name = process.argv[2];
var time = +process.argv[3];
var greeting = '';

function dayGreet(time) {
    if (time <= 9) {
        return greeting = 'morning';
    } else if (time <= 16) {
        return greeting = 'afternoon';
    } else 
        return greeting = 'evening';
};
dayGreet();

process.stdout.write(`good ${greeting} ${name}`);