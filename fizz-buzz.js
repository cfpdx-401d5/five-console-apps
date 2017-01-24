// take an argument n and outputs fizz buzz count to n 
var number = parseInt(process.argv[2]);
var fizz = number % 3;
var buzz = number % 5;
// for (i = 0; i <= 16; i++) {
if (fizz == 0) {
  process.stdout.write('fizz');
}
if (buzz == 0) {    
  process.stdout.write('buzz');
}
else {
  process.stdout.write(`${number}`);
}
// }
