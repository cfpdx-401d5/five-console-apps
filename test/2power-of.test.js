var child_process = require('child_process');
var assert = require('assert');
var powerOf = require('../2power-of.js');

describe('test2', function() {
    it('returns first argument to the power of the second argument', function() {
        var x = 3;
        var y = 3;
        assert.equal(powerOf, 27);
    })
})
