var time = process.argv[2]; 

var split = time.split(':');

var number = parseInt(split);

function dayGreet (number) {
    if (number < 1200)
        process.stdout.write('Good Morning, Claire');
    else if (number < 1700)
        process.stdout.write('Good Afternoon, Claire');
    else 
        process.stdout.write('Good Evening, Claire');
}

process.stdout.write(number.toString());

dayGreet(number);
