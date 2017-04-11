//these lines are every file
var assert = require('assert'); // pulling assert package from node by using require
var run = require('./run');

// this is what you are actually testing. first arg is a string, next is function to test
describe('add one at a time', function() {
    it(' new number ', function() {
        // call and use program and test expected and actual
        var actual = run(['add-one.js', 4]);
        assert.equal(actual, 5);
    });
});