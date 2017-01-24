// take an argument n and outputs fizz buzz count to n 
var n = process.argv[2];

for (var i = 1; i <= n; i++) {

  if (i % 3 === 0) {
    process.stdout.write('fizz' + '\n');
  }
  else if (i % 5 === 0) {
    process.stdout.write('buzz' + '\n');
  }
  else {
    process.stdout.write(i + '\n');
  }

}