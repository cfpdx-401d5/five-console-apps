var child_process = require('child_process');

module.exports = function run(args) {

    return child_process.execFileSync(
        'node', //main thing to run
        args, //arguments to supply
        { encoding: 'utf8' } //not ready for bianry, utf8 string please!
    );
};