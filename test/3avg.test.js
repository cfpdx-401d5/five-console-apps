var child_process = require('child_process');
var assert = require('assert');
var avg = require('../3avg.js');

describe('test3', function() {
    it('returns avg of all supplied arguments', function() {
        args = [2, 4, 6, 8];
        assert.equal(avg, 5);
    })
})