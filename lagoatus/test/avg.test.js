var assert = require('assert');
var run = require('./run');

describe('averaging app', function(){
    it('calculates_number_average', function(){
        var output = run(['avg.js', '3', '4', '6', '0', '3']);
        assert.equal(output, '3.2');
    })
});


// 3 4 6 0 3