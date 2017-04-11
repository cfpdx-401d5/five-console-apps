// returns the average of all supplied arguments
var argsArray = process.argv.slice(2);

function getSum(total, num) {
  return total + num;
}

for (var i = 0; i < argsArray.length; i++) {
  // total += argsArray[i];
   
}
var sumArray = argsArray.reduce(getSum);
var avg = sumArray / argsArray.length;
process.stdout.write(`${avg}`);