var assert = require('assert');
var run = require('./run.js');

describe('day-greet app', function() {
    it('takes args to create afternoon greeting', function() {
        var output = run(['day-greet.js', 'brigitte', '14:58']);
        assert.equal(output, 'good afternoon brigitte');
    });
    it('takes args to create morning greeting', function() {
        var output = run(['day-greet.js', 'brigitte', '8:58']);
        assert.equal(output, 'good morning brigitte');
    });
    it('takes args to create evening greeting', function() {
        var output = run(['day-greet.js', 'brigitte', '17:01']);
        assert.equal(output, 'good evening brigitte');
    });
});