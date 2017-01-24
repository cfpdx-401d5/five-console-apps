var assert = require('assert');
var run = require('./run.js');

describe('returning an average app', function(){
    it('averages an array of numbers', function() {
        var output = run(['avg.js', [3, 4, 6, 0, 3]]);
        assert.deepEqual(output, 3.2);
    });
});