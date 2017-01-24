var assert = require('assert');
var child_process = require('child_process');

describe('fizz-buzz app', function() {
    it('outputs fizz-buzz count to arg', function() {
        var output = child_process.execFileSync(
            'node',
            ['fizz-buzz.js', '16'],
            { encoding: 'utf8' }
        );
        assert.equal(output, 
            '1' + '\n' +
            '2' + '\n' +
            'fizz' + '\n' +
            '4' + '\n' +
            'buzz' + '\n' +
            'fizz' + '\n' +
            '7' + '\n' +
            '8' + '\n' +
            'fizz' + '\n' +
            'buzz' + '\n' +
            '11' + '\n' +
            'fizz' + '\n' +
            '13' + '\n' +
            '14' + '\n' +
            'fizzbuzz' + '\n' +
            '16' + '\n'
        )
    });
})