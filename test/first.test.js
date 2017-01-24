var assert = require('assert');
var add = require('./run.js') 

describe('add-one', function() {
    it('should take the first argument and add one to it and then return the value of that new number', function() {
        var output = run(['add-one.js', 2]);
        assert.equal(output, 3); //or should it not equal 2? How would that work?
    });
});
