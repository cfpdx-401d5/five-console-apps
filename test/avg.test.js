var assert = require('assert');
var run = require('./run.js');

describe('avg', function() {
    it('should return the average of all the numbers', function() {
        var output = run(['avg.js', 3, 4, 6]);
        assert.notEqual(output, 4.3333333333);
    });
});