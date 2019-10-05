import Queue from "../src/queue.js";

export default function passFlower(m, n){
    let q = new Queue();
    for (let i = 1; i <= m; i++){
        q.enqueue(i);
    }

    for (let j = 1; q.size > 1 && j <= n;){
        if (j == n) {
            q.dequeue();
            j = 1;
        } else {
            let d = q.dequeue();
            q.enqueue(d);
            j++;
        }
    }
    return q.dequeue();
}


console.log(passFlower(6,6));
