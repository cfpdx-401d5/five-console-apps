var assert = require('assert');
var run = require('./run.js');

describe('power-of app', function() {
    it('returns first arg to the power of the second arg', function () {
        var output = run(['power-of.js', '3', '3']);
        assert.equal(output, 27);
    });
});