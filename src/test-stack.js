import Stack from './stack';

const s = new Stack();
s.push(1);
s.push(22);
s.push(21);
console.log(s.length);
console.log(s.toString());
s.pop();
s.push(23);
console.log(s.toString());
console.log(s.length);
console.log(s.peek());
s.clear();
console.log(s.toString());



