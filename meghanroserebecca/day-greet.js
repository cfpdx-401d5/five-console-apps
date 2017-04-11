var time = parseInt(process.argv[3]) || new Date().getHours();
var name = process.argv[2];

var dayGreet = function(name, time) {
  var greeting;
  if (time < 12) {
    greeting = 'good morning, ' + name + '!';
    return greeting;
  } else if (time < 17) {
    greeting = 'good afternoon, ' + name + '!';
    return greeting;
  } else {
    greeting = 'good evening, ' + name + '!';
    return greeting;
  }
};

process.stdout.write(dayGreet(name, time));