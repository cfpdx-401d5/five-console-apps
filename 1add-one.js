// + before turns to number - equiv to parseInt()
var x = +process.argv[2];

function addOne(x) {
  return x + 1;
}

process.stdout.write(addOne(x) + '\n'.toString());