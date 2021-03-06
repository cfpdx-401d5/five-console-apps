// fizz-buzz

// Take an argument n and outputs fizz buzz count to n

// > node fizz-buzz.js 16
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// 16

// replace any number divisible by three with the word "fizz", 
// and any number divisible by five with the word "buzz".

var max = Number(process.argv[2]);
var countMessage = '';

for (var i = 1; i <= max; i++){
    if (i % 3 === 0 && i % 5 == 0){
        countMessage += `fizzbuzz\n`;
    } else if (i % 3 === 0){
        countMessage += `fizz\n`;
    } else if (i % 5 === 0){
        countMessage += `buzz\n`;
    } else {
        countMessage += `${i}\n`;
    }
}

process.stdout.write(countMessage);