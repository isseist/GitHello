// 配列を2個ずつ反転
var array = [1,2,3,4,5,6,7,8,9,10,11];
var array2 = [];
var rnum = 4;

for (i=1; i<=(Math.ceil(array.length/rnum)); i++) {
  array2.push(array.slice((i-1)*rnum, i*rnum).reverse());
}
console.log(array2);

/*
// 1からNまでの自然数の数列を'rnum'個ずつ反転する
var __ = require('immutable');
var __natural = __.Range(0);
var N = 23;
var rnum = 4;

function rArray(i) {
  return i <= 1 ? 1 : rnum * Math.floor((i-1)/rnum) + rnum + 1 - i + rnum * Math.floor((i-1)/rnum);
}

var __rArray = __natural.map(rArray);
var __rArrayN = __rArray.take(N);

console.log(__rArrayN);//calcurate and output
*/
