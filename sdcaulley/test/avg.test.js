var assert = require('assert');
var run = require('./run.js');

describe('average app', function() {
    it('generate the average of the arguments provided', function() {
        assert.equal(run(['avg.js', '3', '4', '6', '0', '3']), '3.2');
    });
});