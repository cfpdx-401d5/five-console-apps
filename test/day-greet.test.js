//standard files to bring in
var assert = require('assert');
var run = require('./run.js');

//describe what gets tested 
describe('get time and name', function() {
    var actual;
    it('morning hours ', function() {
        actual = run(['day-greet.js', 'Monkee', 1000]);
        assert.equal(actual, 'good morning Monkee');
    });
    it('afternoon hours ', function() {
        actual = run(['day-greet.js', 'Monkee', 1355]);
        assert.equal(actual, 'good afternoon Monkee');
    });
    it('evening hours ', function() {
        actual = run(['day-greet.js', 'Monkee', 1800]);
        assert.equal(actual, 'good evening Monkee');
    });
});