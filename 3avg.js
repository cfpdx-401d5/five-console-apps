var args = [];
function argsArr() {
    for (i = 2; i < process.argv.length; i++) {
        args.push(+process.argv[i]);
    };
};
argsArr();

function avg(args) {
    return args.reduce(function(a,b) {
        return a + b;
    }, 0) / args.length;
}
process.stdout.write(avg(args).toString());