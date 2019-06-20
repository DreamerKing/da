import TArray from "../src/t-array.mjs";
let size = 10000;
let t = new TArray(size);
t.setData();
//console.log(t.toString());
// t.bubbleSort();
//t.slectionSort();

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
