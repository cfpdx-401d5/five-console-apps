//this will run the test

var child_process = require('child_process'); //this comes from node

module.exports = function run(args) {
    return child_process.execFileSync(
        'node',
        args, { encoding: 'utf8' }
    );
};