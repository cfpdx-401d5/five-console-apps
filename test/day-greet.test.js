var assert = require('assert');
var run = require('./run.js');

describe('day-greet app', function(){
    it('has an hour value corresponding to the 24 hour military clock', function(){
        it('cannot have an hour value less than 0', function(){
            var output = run(['name', -1]);
            assert.notEqual(output, 0);
        });
        it('cannot have an hour value more than 24', function(){
            var output = run(['name, 25']);
            assert.notEqual(output, 24);
        });        
    });
});