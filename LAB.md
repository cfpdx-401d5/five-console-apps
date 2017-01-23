<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Five Console Apps
===

## Five Simple, Tested, Console Apps

Get accustomed to writing simple node processes that can be run from the command line.

### The Five Console Apps

#### add-one
  
Adds 1 to first argument

```
> node add-one.js 3
4
```

#### power-of

Returns first argument to the power of the second argument

```
> node power-of.js 3 3
27
```

#### avg 

Returns the average of all supplied arguments

```
> node avg.js 3 4 6 0 3
3.2
```

#### day-greet

Take a first argument of name and second argument of 24hr time

```
> node day-greet.js marty 14:58
good afternoon marty

> node day-greet.js marty 8:58
good morning marty

> node day-greet.js marty 17:01
good evening marty
```
    
#### fizz-buzz

Take an argument n and outputs fizz buzz count to n

```
> node fizz-buzz.js 16
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
```

### Requirements

The whole assignment should be done in this repo. For each console app, 
you should have a js file and an accompanying test file:

```
add-one.js
avg.js
day-greet.js
fizz-buzz.js
power-of.js
/test
  add-one.test.js
  avg.test.js
  day-greet.test.js
  fizz-buzz.test.js
  power-of.test.js
.eslintrc
.gitignore
```

Install `mocha` and `eslint` globally via:

```
> npm install -g mocha eslint
```

Here are commands to test and lint:

```
> mocha  //runs all tests inside folder test
> eslint . //lints all the javascript files
> mocha -w //adds an ongoing watch
```

You should write tests first and write a test for each meaningful "case".

### Rubric

* Tests (1pt x 5 = 5pts)
* Console App (1pt x 5 = 5pts)



