var assert = require('assert');
var run = require('./run.js');

describe('fizz buzz app', function() {
    it('for count "n" print "fizz" for multiples of 3 and "buzz" for multiples of 5', function() {
        var result = run(['fizz-buzz.js', 16]);
        assert.equal(result, [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16].join('\n') +
            '\n');
    });
});