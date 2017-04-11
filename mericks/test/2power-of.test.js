
var assert = require('assert');
var run = require('./run.js');

describe('power-of app', function() {
    it('returns first argument to the power of the second argument', function() {
        var output = run(['2power-of.js', '3', '3'])
        assert.equal(output, '27');
    })
});