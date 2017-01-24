dayGreet = function() {
    var greeting;
    var time = parseInt(process.argv[3]) || new Date().getHours();
    var name = process.argv[2];
    if (time < 12) {
        greeting = 'good morning, ' + name + '!';
    } else if (time < 17) {
        greeting = 'good afternoon, ' + name + '!';
    } else {
        greeting = "good evening, " + name + '!';
    }
}

process.stdout.write(dayGreet());