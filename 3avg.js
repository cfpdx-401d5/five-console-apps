function avg(args) {
    return args.reduce(function(a,b) {
        return a + b;
    }, 0) / args.length;
}