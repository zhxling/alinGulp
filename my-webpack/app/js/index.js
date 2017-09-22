require("../style/style.css");

import sum from './sum'
import addImages from './addImages'
addImages();

import {quickSort, quickSort2} from './quickSort'
let arr = [2,4,3,4,6,3,2,5,6,2,3,6,5,4];

// console.log(quickSort(arr));
// console.log(quickSort2(arr));
// console.log(arr);

import {isPrime, isPrime1} from './rememberFun'

let array = []
for (let i = 0; i < 1000000; i++) {
    array.push(parseInt(Math.random() *1100 ))
}

console.time('isPrime1')
for (let i = 0; i < array.length;i++) {
   isPrime1(array[i])
}
console.timeEnd('isPrime1')

console.time('isPrime')

for (let i = 0; i < array.length;i++) {
    isPrime(array[i])
}
console.timeEnd('isPrime')

import lazyApply from './lazyFun'
lazyApply(function(){alert("I am very lazy, don't input num.1")}, null, [], 10,
    function(){return document.getElementById('test1').value == '1'})