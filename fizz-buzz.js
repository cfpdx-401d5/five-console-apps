//the infamous fizzbuzz. start with getting a number
var fbString = process.argv[2];
var fbNum = Number(process.argv[2]);
var fizz = "fizz ";
var buzz = "buzz";
var both = "fizzbuzz";
var allOut;
for (i = 1; i < fbNum; i++) {
    if (!(i % 3)) {
        process.stdout.write(`${fizz}`);
    } else
    if (!(i % 5)) {
        process.stdout.write(`${buzz}`);
    } else
    if (!(i % 15)) {
        process.stdout.write(`${both}`);
    } else {
        fbString = i.toString();
        process.stdout.write(`${fbString}`);
    }


}
process.stdout.write(`${allOut}`);