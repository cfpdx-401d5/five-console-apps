var number = parseInt(process.argv[2]);

function fizzbuzz (number) {
    var fizzes = [];
    for (var i=1; i <= number; i++) {
        if (i % 15 == 0)
            fizzes.push('FizzBuzz');
        else if (i % 3 == 0)
            fizzes.push('Fizz');
        else if (i % 5 == 0)
            fizzes.push('Buzz');
        else
            fizzes.push(i.toString());
     } 
     process.stdout.write(fizzes.toString());      
}

fizzbuzz(number);
