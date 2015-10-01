// フィボナッチ数列を求める
var num = 100;
var F = [0, 1];
for (i=2; i <= num; i++) {
  F[i] = F[i-1] + F [i-2];
}
console.log(F.slice(1));

/*
var _ = require('lodash');
var __ = require('immutable');
var __natural = __.Range(0);

var num = 100;

var fib = _.memoize(function(i) {
  return i <= 1 ? 1 : fib(i - 1) + fib(i - 2);
});

// function fib(i) {
//   return i <= 1 ? 1 : fib(i - 1) + fib(i - 2);
// }


var __fib = __natural.map(fib);
var __fibnum = __fib.take(num);

console.log(__fibnum.toArray());//calcurate and output
*/

// How about this!

var generateFib;

generateFib = function(list, limit) {
  list.push(list[list.length - 1] + list[list.length - 2]);
  if (list.length >= limit) {
    return console.log(list);
  } else {
    return generateFib(list, limit);
  }
};

generateFib([1, 2], 10);

// in coffee script
generateFib = (list, limit) ->
  list.push(list[list.length - 1] + list[list.length - 2])
  if list.length >= limit then console.log(list) else generateFib(list, limit)

generateFib([1, 2], 10)

// in ruby

def generate_fib(list, limit)
  list << list[-1] + list[-2]
  list.size >= limit ? list : generate_fib(list, limit)
end

generate_fig([1, 2], 10)
