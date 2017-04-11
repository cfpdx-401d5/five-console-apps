var average = process.argv.slice(2).map(function(item) {
    return parseInt(item);
}).reduce(function(total, current) {
    return total += current;
}) / process.argv.slice(2).length;

process.stdout.write(`${average}`);