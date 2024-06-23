// console.log("Hello World!")

// const {
//     print,add
// }= require('./utils.js');

// print("Hello World!") // Hello World!
// console.log(add(1,2)) // 

import sum from './esmodule.js';
import {multiply} from './esmodule.js';

console.log(sum(1,2)); // 3
console.log(multiply(1,2)); // 2
