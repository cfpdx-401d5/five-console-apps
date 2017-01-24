var assert = require('assert');
var child_process = require('child_process');

describe('day-greet app', function() {
    it('adds 1 to argument', function() {
        var output = child_process.execFileSync(
            'node',
            ['day-greet.js', ]
        )
    })
});