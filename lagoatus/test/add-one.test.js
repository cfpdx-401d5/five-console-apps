var assert = require('assert');
var run = require('./run');

describe('adding app', function(){
    it('adds 1 to any number', function(){
        var output = run(['add-one.js', '3']);
        assert.equal(output, '4');
    })
});



