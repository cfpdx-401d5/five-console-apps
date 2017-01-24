
var assert = require('assert');
var child_process = require('child_process');

describe('add-one app', function() {
    it('adds 1 to argument', function() {
        var output = child_process.execFileSync(
            'node',
            ['add-one.js', '3'],
            { endoding: 'utf8' }
        );
        assert.equal(output, 4);
    });
});


