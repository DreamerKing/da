import ksack from '../src/ksack.mjs';

let items = ['A', 'B', 'C', 'D'];
let values = [50, 140, 60, 60];
let weights = [5, 20, 10, 12];
let capacity = 30;
console.log(ksack(values, weights, capacity));
