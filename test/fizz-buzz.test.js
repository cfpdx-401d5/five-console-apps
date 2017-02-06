var assert = require('assert');
var run = require('./run.js');

describe('fizz-buzz test', function(){
    it('prints a number when it\'s not divisible by 3 or 5', function(){
        var output = run(['fizz-buzz.js', 3]);
        assert.equal(output, `1
2
fizz
`
        );
    });
});