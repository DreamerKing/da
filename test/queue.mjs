import Queue from '../src/queue.mjs';

test('new Queue()', () => {
    let q = new Queue();
    expect(0).toBe(q.size);
    expect(true).toBe(q.isEmpty());  
})

test('new Queue([12, 20])', () => {
    let q = new Queue([12, 20]);
    expect(2).toBe(q.size);
    expect(false).toBe(q.isEmpty());
})

test('enqueue()', () => {
    let q = new Queue();
    q.enqueue("King");
    q.enqueue("Dreamer");
    q.enqueue("hahha");  
    expect(3).toBe(q.size);
    expect(false).toBe(q.isEmpty());
    expect("King -> Dreamer -> hahha").toEqual(q.toString());
});

test('dequeue()', () => {
    let q = new Queue(["King", "Dreamer", "hahha"]);
    expect(3).toBe(q.size);
    expect(false).toBe(q.isEmpty());
    expect("King -> Dreamer -> hahha").toEqual(q.toString());
    let de = q.dequeue();
    expect('King').toBe(de);
    expect(2).toBe(q.size);
});

test('front()', () => {
    let q = new Queue();
    q.enqueue("King");
    q.enqueue("Dreamer");
    q.enqueue("hahha");
    let front = q.front(); 
    expect("King").toBe(front);
    expect(3).toBe(q.size);
})

test('back()', () => {
    let q = new Queue();
    q.enqueue("King");
    q.enqueue("Dreamer");
    q.enqueue("hahha");
    let back = q.back();
    expect("hahha").toBe(back);
    expect(3).toBe(q.size);
})






