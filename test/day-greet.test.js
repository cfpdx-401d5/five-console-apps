var assert = require('assert');
var run = require('./run.js');

describe('day-greet', function() {
  it('takes first argument of name and second argument of 24hr time and writes time-appropriate greeting', function() {
    var actual = run(['day-greet.js', 'tom', '03:00']);
    assert.equal(actual, 'good morning tom');
  });
});