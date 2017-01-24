var assert = require('assert');
var run = require('./run.js');

describe('add-one', function() {
  it('adds one to first argument', function() {
    var actual = run(['add-one.js', 3]);
    assert.equal(actual, 4);
  });

  it('confirms that a non-integer argument will return "NaN"', function() {
    var actual = run(['add-one.js', 'cat']);
    assert.equal(actual, 'NaN');
  });
});