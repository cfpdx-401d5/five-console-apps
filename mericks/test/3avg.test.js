
var assert = require('assert');
var run = require('./run.js');

describe('avg app', function() {
    it('returns avg of all supplied arguments', function() {
        var output = run(['3avg.js', '3', '4', '6', '0', '3']);
        assert.equal(output, '3.2');
    })
})