var x = parseInt(process.argv[2]);

function addOne(x) {
    var output = x + 1;
    return output;
}

process.stdout.write(addOne(x).toString());