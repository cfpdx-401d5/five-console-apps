// day-greet

// Take a first argument of name and second argument of 24hr time

// > node day-greet.js marty 14:58
// good afternoon marty

// > node day-greet.js marty 8:58
// good morning marty

// > node day-greet.js marty 17:01
// good evening marty

var name = process.argv[2];
var timeStr = process.argv[3];
var timeArr = timeStr.split(':');
var hour = Number(timeArr[0]);
var minute = Number(timeArr[1]);

if (minute >= 0 && minute < 60){
    if (hour >= 0 && hour < 12) {
        process.stdout.write(`good morning ${name}`);
    } else if (hour >= 12 && hour < 17) {
        process.stdout.write(`good afternoon ${name}`);
    } else if (hour >= 17 && hour <= 24) {
        process.stdout.write(`good evening ${name}`);
    } else {
        process.stdout.write(`that's not how you enter time, ${name}!`);
    }
} else {
    process.stdout.write(`that's not how you enter time, ${name}!`);
}