import Queue from '../src/queue';

let q = new Queue();
q.enqueue("King");
q.enqueue("Dreamer");
q.enqueue("hahha");
console.log(q.toString());
let d = q.dequeue();
console.log(d);
d = q.dequeue();
console.log(d);
console.log(q.toString());
console.log(q.front());
console.log(q.back());





