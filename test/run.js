var child_process = require('child_process');

module.exports = function run (args) {
    return child_process.execFileSync(
        'node', //what we want to use to run our test
        args, //specific arguments of each function we are tessting
        {encoding: 'utf8'} //how we want it to display (in string form)
    );
};