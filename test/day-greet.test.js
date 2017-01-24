var assert = require('assert');
var run = require('./run.js');

describe('day-greet', function() {
    it('it should take the name as the first arg and the date as the second', function() {
        var output = run(['day-greet.js', '']);
        assert.equal(output, 'Good Morning, Claire');
    })
})