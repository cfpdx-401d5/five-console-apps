
var arg2 = process.argv[2];
var arg3 = parseInt(process.argv[3]);

var answer = "good afternoon "+ arg2;

// var greeting = function () { 
// var response1= "good afternoon "+ arg2;
// var response2 = "good afternoon "+ arg2;
// var response3 = "good afternoon "+ arg2;
// }


process.stdout.write(answer.toString());


// > node day-greet.js marty 14:58
// good afternoon marty

// > node day-greet.js marty 8:58
// good morning marty

// > node day-greet.js marty 17:01
// good evening marty