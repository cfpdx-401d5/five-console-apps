var assert = require('assert');
var run = require('./run.js');

describe('add-one', function() {
  it('adds one to first argument', function() {
    var actual = run(['add-one.js', 3]);
    assert.equal(actual, 4);
  });

  it('is "NaN" when a non-integer argument is entered', function() {
    var actual = run(['add-one.js', 'cat']);
    assert.equal(actual, 'NaN');
  });

  it('is "NaN" when no argument is entered', function() {
    var actual = run(['add-one.js']);
    assert.equal(actual, 'NaN');
  });
});