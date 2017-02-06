var k = parseInt(process.argv[2]);

function fizzBuzz(k) {
  var fizzle = '';
  for(var i = 1; i < k; i++) {
	  if(i % 3 === 0) {
	    fizzle += 'fizz';
	  } 
	  if(i % 5 === 0) {
	    fizzle += 'buzz';
	  } 
	  if(i % 3 !== 0 && i % 5 !== 0) {
	    fizzle += i.toString();
	  }
      if(i !== k - 1) {
        fizzle += ' ';
      }
  }
  return(fizzle);
}

process.stdout.write(fizzBuzz(k).toString());