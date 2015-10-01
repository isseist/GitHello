/*
// FizzBuzz problem
var num = 16;
var numf = 3;
var numb = 5;

function mod0(dividend, divisor)
{
  if (0 === (dividend % divisor)) {
    return true;
  }
}

function fizzbuzz(num)
{
  if (mod0(num, numf * numb)) {
    return ('FizzBuzz');
  }
  else if (mod0(num, numf)) {
    return ('Fizz');
  }
  else if (mod0(num, numb)) {
    return ('Buzz');
  }
  else {
    return num;
  }
}

for (i = 1; i <= num; i++) {
  console.log(fizzbuzz(i));
}
*/

var __ = require('immutable');
var __natural = __.Range(1);

var num = 16;
var numf = 3;
var numb = 5;

function mod0(dividend, divisor)
{
  if (0 === (dividend % divisor)) {
    return true;
  }
}

function fizzbuzz(num)
  {
    if (mod0(num, numf * numb)) {
      return 'FizzBuzz';
    }
    else if (mod0(num, numf)) {
      return 'Fizz';
    }
    else if (mod0(num, numb)) {
      return 'Buzz';
    }
    else {
      return num;
    }
  }

var __fizzbuzz = __natural.map(fizzbuzz);
var __fizzbuzznum = __fizzbuzz.take(num);

console.log(__fizzbuzznum.toArray());//calcurate and output

/*
// FizzBuzz problem -> funtion
function  fizzbuzzD(num, numf, numb) {
  var __ = require('immutable');
  var __natural = __.Range(1);

  function mod0(dividend, divisor)
    {
      if (0 === (dividend % divisor)) {
        return true;
      }
    }
  function fizzbuzz(num)
    {
      if (mod0(num, numf * numb)) {
        return 'FizzBuzz';
      }
      else if (mod0(num, numf)) {
        return 'Fizz';
      }
      else if (mod0(num, numb)) {
        return 'Buzz';
      }
      else {
        return num;
      }
    }

  var __fizzbuzz = __natural.map(fizzbuzz);
  var __fizzbuzznum = __fizzbuzz.take(num);

  return __fizzbuzznum;
}
console.log(fizzbuzzD(24,5,7).toArray());//calcurate and output
*/
