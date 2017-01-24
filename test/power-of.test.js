var assert = require('assert');
var child_process = require('child_process');

describe('power-of app', function() {
    it('returns first arg to the power of the second arg', function () {
        var output = child_process.execFileSync(
            'node',
            ['power-of.js', '3', '3'],
            { encoding: 'utf8' }
        );
        assert.equal(output, 27);
    });
});