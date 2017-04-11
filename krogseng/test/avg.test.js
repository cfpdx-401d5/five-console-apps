//get required files for test
var assert = require('assert');
var run = require('./run.js');

//describe the testing
describe('average unknown qty', function() {
    it('averaging ', function() {
        var actual = run(['avg.js', 2, 4, 6, 8, 10]);
        assert.equal(actual, 6);
    });

    describe('average values', function() {
        it('with negative numbers ', function() {
            var actual = run(['avg.js', -2, 4, 6, -8, 10]);
            assert.equal(actual, 2);
        });
    });
});