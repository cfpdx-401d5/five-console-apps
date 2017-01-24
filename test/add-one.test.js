var assert = require('assert');
var run = require('./run.js');

it('add 1 to first argument', function() {
    assert.equal(run(['add-one.js', '6']), '7');
});