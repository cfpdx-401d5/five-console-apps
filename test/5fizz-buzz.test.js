var assert = require('assert');
var run = require('./run.js');

describe('fizz-buzz app', function() {
    it('take arg n and output fizz buzz count to n', function() {
        var output = run(['5fizz-buzz.js', '16']);
        assert.equal(output,
        `
        1
        2
        fizz
        4
        buzz
        fizz
        7
        8
        fizz
        buzz
        11
        fizz
        13
        14
        fizzbuzz
        16
        `);
    })
})