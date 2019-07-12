import knapsack, { dKnapsack } from '../src/knapsack.mjs';

let value = [4, 5, 10, 11, 13];
let size = [3, 4, 7, 8, 9];
let capacity = 16;
let n = 5;
//console.log(knapsack(capacity, size, value, n));
console.log(dKnapsack(capacity, size, value, n));

