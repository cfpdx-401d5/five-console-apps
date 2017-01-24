var number = process.argv[3] || 'could not recognize. try typing a number';

var addOne = Number(number) + (1);

process.stdout.write(String(addOne));