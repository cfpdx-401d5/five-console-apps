var assert = require('assert');
var run = require('./run.js') 

describe('add-one', function() {
    it('should take the first argument and add one to it and then return the value of that new number', function() {
        var output = run(['add-one.js', 2]);
        assert.notEqual(output, 2);
    });
});
