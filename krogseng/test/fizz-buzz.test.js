//get standard files
var assert = require('assert');
var run = require('./run.js');

//let's do the fizzbuzz
describe('fizz, buzz, or fizzbuzz', function() {
    it('get fizz', function() {
        var actual = (['fizz-buzz.js', 3]);
        assert.equal(actual, '12fizz');
    });
});