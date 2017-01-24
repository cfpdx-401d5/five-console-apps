var assert = require('assert');
var run = require('./run.js');

describe('power-of app', function () {
    it('returns the input raised to the input as the exponent',function(){
        var output = run(['power-of.js','3']);
        assert.equal(output, 27);
    });
});