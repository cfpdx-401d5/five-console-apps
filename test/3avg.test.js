
var assert = require('assert');
var run = require('./run.js');

describe('avg app', function() {
    it('returns avg of all supplied arguments', function() {
        var args = [3, 4, 6, 0, 3];
        var output = run(['3avg.js', args]);
        assert.equal(output, '3.2');
    })
})