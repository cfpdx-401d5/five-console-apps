var assert = require('assert');
var run = require('./run.js'); // './' points to the cwd

describe('add-one app', function() {
    it('the return is not the same as the input number', function(){
        var output = run(['add-one.js','2']);
        assert.notEqual(output, 2);
    });

});