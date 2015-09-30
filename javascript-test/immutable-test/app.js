var _ = require('lodash');
var __ = require('immutable');
//フィボナッチ数列100個
var __natural = __.Range();
var fibF = _.memoize(function(n){
  return n <= 1 ? 1 : fibF(n - 2) + fibF (n - 1);
});
var __fib = __natural.map(fibF);
var __fib100 = __fib.take(100);
console.log(__fib100.toArray());//calcurate and output
//0から9まで全て表示-1
/*
var __natural  = __.Range(); //自然数という無限数列
var __natural10 = __natural.take(10);
console.log(__natural10.toArray());
*/
//0から9まで全て表示-2
/*
console.log(
  __
  .Range()
  .take(10)
  .toArray()
);
*/
//0から9まで全て足す
/*
var plus = function(a,b){return a + b;};
console.log(
  __
  .Range()
  .take(10)
  .reduce(plus)
);
*/
