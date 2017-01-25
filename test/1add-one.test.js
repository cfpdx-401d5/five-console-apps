
var assert = require('assert');
var run = require('./run.js');

describe('add-one app', function() {
    it('adds 1 to the first argument', function() {
        var output = run(['1add-one.js', '3']);
        console.log(output);
        assert.equal(output, '4')
    });
})