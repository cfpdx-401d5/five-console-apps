// avg

// Returns the average of all supplied arguments

// > node avg.js 3 4 6 0 3
// 3.2

var average, sum;
var numArr = [];
var firstArgIndex = 2;

for (var i = firstArgIndex; i < process.argv.length; i++){
    numArr.push(Number(process.argv[i]));
}

sum = numArr.reduce(function(a,b){
    return a + b;
}, 0);

average = sum/numArr.length;

process.stdout.write(String(average))