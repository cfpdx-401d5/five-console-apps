var time = process.argv[2]; 
var name = process.argv[3];

var split = time.split(':');

var number = parseInt(split);

function dayGreet (name, number) {
    if (number < 1200)
        return (`Good Morning ${name}`);
    else if (number < 1700)
        return (`Good Afternoon ${name}`);
    else 
        return (`Good Evening ${name}`);
}

process.stdout.write(dayGreet(name, number));

