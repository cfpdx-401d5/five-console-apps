var assert = require('assert');
var run = require('./run.js');

it('add 1 to first argument', function() {
    assert.equal(run(['add-one.js', '6']), '7');
});

it('test for NaN', function() {
    assert.equal(run(['add-one.js', 'foo']), 'NaN');
});

it('test for negative numbers', function() {
    assert.equal(run(['add-one.js', '-1']), '0');
});