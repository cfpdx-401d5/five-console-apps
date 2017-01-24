var assert = require('assert');
var run = require('./run.js');

it('raise the first argument to the power of the second argument', function() {
    assert.equal(run(['power-of.js', '3', '3']), '27');
});