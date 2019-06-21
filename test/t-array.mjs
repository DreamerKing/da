import TArray from "../src/t-array.mjs";
let size = 10;
let t = new TArray(size);
t.setData();
//console.log(t.toString());
// t.bubbleSort();
//t.slectionSort();
/* 
let start = new Date().getTime();
t.insertionSort();

let end = new Date().getTime();
let expend = end - start;
console.log("insertionSort:", expend);

t.setData();
start = new Date().getTime();
t.slectionSort();
end = new Date().getTime();
expend = end - start;
console.log("slectionSort:", expend);

t.setData();
start = new Date().getTime();
t.bubbleSort();
end = new Date().getTime();
expend = end - start;
console.log("bubbleSort:", expend);
//console.log(t.toString());
 */
/* 
//console.log(t.toString());
let start = new Date().getTime();
t.shellSort();
let end = new Date().getTime();
console.log("ShellSort1:", end - start);
//console.log(t.toString());

t.setData();
//console.log(t.toString());
start = new Date().getTime();
t.shellSort2();
end = new Date().getTime();
console.log("ShellSort2:", end - start);
//console.log(t.toString()); */

console.log(t.toString());
t.mergeSort();
console.log(t.toString());


