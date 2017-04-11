var assert = require('assert');
var run = require('./run');

describe('power-of app', function(){
    it('will multiply 3*3*3', function(){
        var output = run(['power-of.js', '3', '3']);
        assert.equal(output, '27');
    })
});



