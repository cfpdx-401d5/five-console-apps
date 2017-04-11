var assert = require('assert');
var run = require('./run.js');

describe('add-one app', function() {
    it('adds one to current value', function() {
        var output = run(['add-one.js', 3])
        assert.deepEqual(output, '4')
    });
});