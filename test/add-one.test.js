var child_process = require('child_process');
var assert = require('assert');
var run = require('./run.js');

describe('add-one', function() {
  it('adds one to first argument', function() {
    var actual = run(['add-one.js', 3]);
    assert.equal(actual, 4);
  });
});