var assert = require('assert');
var run = require('./run.js');

it('greet a person with "morning" between 5 and 12', function() {
    assert.equal(run(['day-greet.js', 'marty', '8:58']), 'good morning marty');
});

it('greet a person with "afternoon" between 12 and 17', function() {
    assert.equal(run(['day-greet.js', 'marty', '14:58']), 'good afternoon marty');
});

it('greet a person with "evening" after 17', function() {
    assert.equal(run(['day-greet.js', 'marty', '17:01']), 'good evening marty');
});