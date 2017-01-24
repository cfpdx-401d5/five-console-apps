//get the values coming in
var base = process.argv[2];
var exp = process.argv[3];
var result = Math.pow(base, exp);

process.stdout.write(`\n ${ result } \n`);