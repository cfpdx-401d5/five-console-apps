//add one to value passed in
//the global process has this property
var answer = process.argv[2];
answer = Number(answer) + 1;
//do the thing
process.stdout.write(`${ answer }`);