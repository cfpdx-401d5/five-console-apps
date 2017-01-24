var assert = require('assert');
var run = require('./run.js');

it('for count "n" print "fizz" for multiples of 3 and "buzz" for multiples of 5', function() {
    assert.equal(run(['fizz-buzz.js', '16']), '1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16');
});