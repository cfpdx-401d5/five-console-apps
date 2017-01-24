// built-in node module that allows us to "spawn" a new child process
var child_process = require('child_process');
// built-in node module that allows use of simple set of assertion tests
var assert = require('assert');
// adds file with function to be tested
var addOne = require('../1add-one.js');

describe('test1', function() {
    it('adds 1 to the first argument', function() {
        var x = 6
        assert.equal(addOne, 7)
    });
});
