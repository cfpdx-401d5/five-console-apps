var assert = require('assert');
var run = require('./run.js');

describe('day-greet', function() {

  it('returns time-appropriate greeting of "good morning" plus user-name for time between 00:00 and 12:00', function() {
    var actual = run(['day-greet.js', 'tom', '03:00']);
    assert.equal(actual, 'good morning tom');
  });

  it('returns time-appropriate greeting of "good afternoon" plus user-name for time between 12:00 and 17:00', function() {
    var actual = run(['day-greet.js', 'tom', '14:30']);
    assert.equal(actual, 'good afternoon tom');
  });

  it('returns time-appropriate greeting of "good evening" plus user-name for time between 17:00 and 24:00', function() {
    var actual = run(['day-greet.js', 'tom', '19:30']);
    assert.equal(actual, 'good evening tom');
  });

});