// divisible by 3 = fizz
// divisible by 5 = buzz
// divisible by both = fizzbuzz
var n = process.argv[2];

function fizzBuzz(n) {
   result = '';
   for (i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'fizzbuzz\n';
        } else if (i % 3 === 0) {
            result += 'fizz\n';
        } else if (i % 5 === 0) {
            result += 'buzz\n';
        } else result += `${i}\n`;
   }
   return result;
}

process.stdout.write(`${fizzBuzz(n)}`);