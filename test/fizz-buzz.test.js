var assert = require('assert');
var run = require('./run.js');

describe('fizz-buzz', function() {
  it('returns fizz when argument supplied, is divisible by 3', function() {
    var actual = run(['fizz-buzz.js', 6]);
    assert.equal(actual, 'fizz');
  });
});