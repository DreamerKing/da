import seqSearch, { binSearch, count, seqSearch2, seqSearch3, seqSearch4, findMax, findMin } from '../src/seqSearch.mjs';
let test = [];
for (let i = 0; i < 100; i++) {
    test[i] = Math.floor(Math.random()*101);  
}

console.log(seqSearch(test,13));
console.log(seqSearch2(test, 32));
console.log(seqSearch3(test, 20));
console.log(seqSearch4(test, 23));
console.log(findMax(test));
console.log(findMin(test));
let test2 =  test.sort();
console.log(binSearch(test2, 20));
console.log(count(test2, 20 ));




