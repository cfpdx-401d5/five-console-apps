var assert = require('assert');
var run = require('./run.js');

describe('power-of', function() {
    it('should take the second number and assign it as the exponent for the first number and return the value', function() {
        var output = run(['power-of.js', 2, 3]);
        assert.equal(output, 8);
    });
})