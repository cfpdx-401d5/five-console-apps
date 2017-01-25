
var assert = require('assert');
var run = require('./run.js');

describe('day-greet app', function() {
    it('1st arg of name and 2nd arg of time to greet user - afternoon', function() {
        var output = run(['4day-greet.js', 'marty', '14:58']);
        assert.equal(output, 'good afternoon marty');
    });

    it('1st arg of name and 2nd arg of time to greet user - morning', function() {
        var output = run(['4day-greet.js', 'marty', '8:58']);
        assert.equal(output, 'good morning marty');
    });

    it('1st arg of name and 2nd arg of time to greet user - evening', function() {
        var output = run(['4day-greet.js', 'marty', '17:01']);
        assert.equal(output, 'good evening marty');
    });
});


// > node day-greet.js marty 14:58
// good afternoon marty

// > node day-greet.js marty 8:58
// good morning marty

// > node day-greet.js marty 17:01
// good evening marty



