var number = process.argv[3] || 'could not recognize. try tryping a number';

var addOne = Number(number) + 1;

process.stdout.write(String(addOne));