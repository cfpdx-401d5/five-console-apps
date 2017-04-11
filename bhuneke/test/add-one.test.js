
var assert = require('assert');
var run = require('./run.js');

describe('add-one app', function() {
    it('adds 1 to argument', function() {
        var output = run(['add-one.js', '3']);
        assert.equal(output, 4);
    });
});


