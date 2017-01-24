function dayGreet(name, time) {
    if (time <= 7) {
        process.stdout.write(`good morning ${name}`);
    } else if (time <= 15) {
        process.stdout.write(`good afternoon ${name}`);
    } else 
        process.stdout.write(`good evening ${name}`);
}