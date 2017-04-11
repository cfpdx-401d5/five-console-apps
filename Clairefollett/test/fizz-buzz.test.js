var assert = require('assert');
var run = require('./run.js');

describe('fizz-buzz', function() {
    it('it should fizz for 3 and buss for 5 and fizzbuzz for both', function() {
        var answer = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz', '16']

        var output = run(['fizz-buzz.js', 16]);
        assert.equal(output, answer);
    })
})