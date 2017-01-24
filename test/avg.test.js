var assert = require('assert');
var child_process = require('child_process');

describe('avg app', function() {
    it('takes the avg of all args', function() {
        var output = child_process.execFileSync(
            'node',
            ['avg.js', '3', '4', '6', '0', '3'],
            { encoding: 'utf8' }
        );
        assert.equal(output, 3.2);
    });
});