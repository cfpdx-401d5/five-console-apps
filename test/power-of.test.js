var assert = require('assert');
var run = require('./run.js');

describe('power-of', function() {
  it('returns first argument to the power of the second argument', function() {
    var actual = run(['power-of.js', 3, 3]);
    assert.equal(actual, 27);
  });

  it('is "NaN" when only one argument is entered', function() {
    var actual = run(['power-of.js', 3]);
    assert.equal(actual, 'NaN');
  });

  it('is "NaN" when no argument is entered', function() {
    var actual = run(['power-of.js']);
    assert.equal(actual, 'NaN');
  });

});
