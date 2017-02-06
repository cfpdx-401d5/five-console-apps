var assert = require('assert');
var run = require('./run.js');

describe('day-greet app', function(){
    describe('has an appropriate greeting depending on the time', function(){
        it('greets with "afternoon" at/after 12:00', function(){
            var output = run(['day-greet.js', 'name', '12:00']);
            assert.equal(output, `good afternoon name`);
        });
        it('greets with "morning" at/after 00:00', function(){
            var output = run(['day-greet.js', 'name', '00:00']);
            assert.equal(output, `good morning name`);
        });
        it('greets with "evening" at/after 17:00', function(){
            var output = run(['day-greet.js', 'name', '17:00']);
            assert.equal(output, `good evening name`);
        });
    });
});