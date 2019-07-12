import { recurFib, dynFib, iterFib  } from '../src/fib.mjs';
console.time("recurFib");
let r = recurFib(20);
console.timeEnd("recurFib");
console.log(r);


console.time("dynFib");
let d = dynFib(20);
console.timeEnd("dynFib");
console.log(d);

console.time("iterFib");
let i = iterFib(20);
console.timeEnd("iterFib");
console.log(i);



