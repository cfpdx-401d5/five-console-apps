var assert = require('assert');
var run = require('./run.js');

describe('avg app', function (){
    it ('finds the mean after summing the arguments', function(){
        var output = run(['avg.js', 1,2,3,4,5]);
        assert.equal(output, 3);
    });
});