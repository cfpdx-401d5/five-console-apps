//standard files to bring in
var assert = require('assert');
var run = require('./run.js');

//describe what gets tested 
describe('raise number to a power', function() {
    it('what is multiplied ', function() {
        var actual = run(['power-of.js', 2, 3]);
        assert.equal(actual, 8);
    });

    it('missing value ', function() {
        var actual = run(['power-of.js', 3]);
        assert.equal(actual, 'NaN');
    });

});