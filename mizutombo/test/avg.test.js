var assert = require('assert');
var run = require('./run.js');

describe('avg', function() {
  it('returns the average of all supplied arguments', function() {
    var actual = run(['avg.js', 3, 4, 6, 0, 3]);
    assert.equal(actual, 3.2);
  });

  it('returns "NaN" when no arguments are provided', function() {
    var actual = run(['avg.js']);
    assert.equal(actual, 'NaN');
  });

  it('returns "NaN" when a non-integer argument is provided', function() {
    var actual = run(['avg.js', 'dog']);
    assert.equal(actual, 'NaN');
  });

});