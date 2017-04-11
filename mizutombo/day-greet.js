// take a first argument of name and second argument of 24hr time
var name = process.argv[2];

var timeArg = (process.argv[3]).split(':');
var hours = timeArg[0]; // string

var timeHour = parseInt(hours);

if (timeHour > 0 && timeHour < 12) {
  process.stdout.write('good morning ' + name);
}
if (timeHour >= 12 && timeHour < 17) {
  process.stdout.write('good afternoon ' +  name);
}
if (timeHour >= 17 && timeHour < 24) {
  process.stdout.write('good evening ' + name);
}