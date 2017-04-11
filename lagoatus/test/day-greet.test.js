var assert = require('assert');
var run = require('./run');

describe('day-greet app', function(){
    it('time_reference_greeting_app', function(){
        var output = run(['day-greet.js', 'Aaron', '14:58']);
        assert.equal(output, 'good afternoon Aaron');
    })
    //  it('time_reference_greet_app', function(){
    //     var output = run(['day-greet.js', 'Aaron', '14:58']);
    //     assert.equal(output, 'good afternoon Aaron');
    // })
});


