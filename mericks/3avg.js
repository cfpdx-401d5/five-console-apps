// function avg(args) {
//     var args = [];
//     for (i = 2; i < process.argv.length; i++) {
//         args.push(+process.argv[i]);
//     };
//     return args.reduce(function(a,b) {
//         return a + b;
//     }, 0) / args.length;
// }
// process.stdout.write(avg(args).toString());

// refactored with J's guidance 
function calcAvg() {
    var args = process.argv.slice(2);
    return args.reduce(function(a, b) {
        return a + parseInt(b);
    }, 0) / args.length;
}

process.stdout.write(`${calcAvg()}`);