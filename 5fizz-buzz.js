// divisible by 3 = fizz
// divisible by 5 = buzz
// divisible by both = fizzbuzz
var n = process.argv[2];

function fizzBuzz(n) {
   result = [];
   for (i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('fizzbuzz');
        } else if (i % 3 === 0) {
            result.push('fizz');
        } else if (i % 5 === 0) {
            result.push('buzz');
        } else result.push(`${i}`);
   }
   return result;
}

process.stdout.write(`${fizzBuzz(n)}`);