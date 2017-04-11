var assert = require('assert');
var run = require('./run.js');

describe('day-greet app', function() {
    it('greet a person with "morning" between 5:00 and 12:00', function() {
        assert.equal(run(['day-greet.js', 'marty', '8:58']), 'good morning marty');
    });

    it('greet a person with "afternoon" between 12:00 and 17:00', function() {
        assert.equal(run(['day-greet.js', 'marty', '14:58']), 'good afternoon marty');
    });

    it('greet a person with "evening" after 17:00', function() {
        assert.equal(run(['day-greet.js', 'marty', '17:01']), 'good evening marty');
    });

    it('tell a person to go back to bed ater 22:00', function() {
        assert.equal(run(['day-greet.js', 'marty', '3:33']), 'go back to bed marty');
    });
});