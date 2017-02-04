var assert = require('assert');
var run = require('./run.js');

describe('avg', function() {
    it('should return the average of all the numbers', function() {
        var output = run(['avg.js', 3, 4, 6, 0, 3]);
        assert.equal(output, '3.2');
    });
});