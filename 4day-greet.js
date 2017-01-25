var name = process.argv[2];
var time = +process.argv[3].slice(0, -3);

function dayGreet(time) {
    var greeting;
    if (time <= 10) {
        greeting = 'morning';
    } else if (time <= 16) {
        greeting = 'afternoon';
    } else {
        greeting = 'evening';
    }
    return greeting
}

process.stdout.write(`good ${dayGreet(time)} ${name}`);