var assert = require('assert');
var run = require('./run.js');

describe('day-greet', function() {
    var output;
    it('morning', function() {
        output = run(['day-greet.js', 'Claire', '11:46']);
        assert.equal(output, 'Good Morning Claire');
    });
    it('afternoon', function() {
        output = run(['day-greet.js', 'Claire', '14:46']);
        assert.equal(output, 'Good Afternoon Claire');
    });
    it('evening', function() {
        output = run(['day-greet.js', 'Claire', '17:33']);
        assert.equal(output, 'Good Evening Claire');
    });
});