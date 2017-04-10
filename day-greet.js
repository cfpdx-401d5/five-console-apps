var name = process.argv[2]; 
var time = process.argv[3].split(':').map(function(item) {
    return parseInt(item);
});

var message;

if (4 <= time[0] && time[0] < 12) {
    process.stdout.write(`Good Morning ${name}`);
}    
if (12 <= time[0] && time[0] < 17) {
    process.stdout.write(`Good Afternoon ${name}`);
}    
if (17 <= time[0] && time[0] < 22) {
    process.stdout.write(`Good Evening ${name}`);
}

if (time[0] < 4 || 22 <= time[0]) {
    process.stdout(`Goodnight ${name}`);
}
