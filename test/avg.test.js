var assert = require('assert');
var run = require('./run.js');

describe('avg app', function() {
    it('takes the avg of all args', function() {
        var output = run(['avg.js', '3', '4', '6', '0', '3']);
        assert.equal(output, 3.2);
    });
});