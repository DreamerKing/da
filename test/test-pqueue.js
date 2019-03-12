import Pqueue from '../src/pqueue';

function Patient(name, code){
    this.name = name;
    this.code = code;
}

let pq = new Pqueue();
pq.enqueue(new Patient("Simth", 2));
pq.enqueue(new Patient("King", 0));
pq.enqueue(new Patient("Panapn", 3));
pq.enqueue(new Patient("Dreamer", 6));
pq.enqueue(new Patient("Hahha", 1));
pq.enqueue(new Patient("Juanuan", 12));
console.log(pq.toString());
let deq = pq.dequeue();
console.log(deq[0].name, deq[0].code);
console.log(pq.toString());

deq = pq.dequeue();
console.log(deq[0].name, deq[0].code);
console.log(pq.toString());




