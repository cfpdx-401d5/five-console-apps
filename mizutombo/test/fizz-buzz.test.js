var assert = require('assert');
var run = require('./run.js');

describe('fizz-buzz', function() {

  it('returns fizz when the argument number is wholly divisible by 3, returns buzz when the argument number is wholly divisible by 5, returns fizzbuzz when the argument is wholly divisible by both 3 & 5,and returns the argument number when not wholly divisible by either 3 or 5', function() {
    var actual = run(['fizz-buzz.js', 16]);
    assert.equal(actual, '1\n2\nfizz\n4\nbuzz\nfizz\n7\n8\nfizz\nbuzz\n11\nfizz\n13\n14\nfizzbuzz\n16\n');
  });

  it('returns "" when the argument number is not a number', function() {
    var actual = run(['fizz-buzz.js', 'seven']);
    assert.equal(actual, '');
  });

});