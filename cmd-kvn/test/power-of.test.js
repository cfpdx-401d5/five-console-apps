var assert = require('assert');
var run = require('./run.js');

describe('power-of app', function () {
    it('returns the product of the first input raised to the second input',function(){
        var output = run(['power-of.js', 2, 3]);
        assert.equal(output, 8);
    });
});