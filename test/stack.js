import Stack from "../src/stack";

test("new Stack() of top is 0", () => {
    const s = new Stack();
    expect(0).toBe(s.top);
});

test("new Stack([12, 20]) of top is 2", () => {
    const s = new Stack([12, 20]);
    expect(2).toBe(s.size());
    expect([12, 20]).toEqual(s.toString());
});

test("push()", () => {
    const s = new Stack();
    s.push(1);
    s.push(22);
    expect(2).toBe(s.top);
    expect(s.toString()).toEqual([1, 22]);
    s.push(21);
    expect(3).toBe(s.top);
    expect(s.toString()).toEqual([1,22, 21]);
});

test('pop()', () => {
    const s = new Stack();
    s.push(1);
    s.push(22);
    s.push(21);
    let p = s.pop();
    expect(21).toBe(p);
    expect(2).toBe(s.top);
});

test('peek()', () => {
    const s = new Stack();
    s.push(1);
    s.push(22);
    s.push(21);
    let p = s.peek();
    expect(21).toBe(p);
    expect(3).toBe(s.top);
})

test("clear()", () => {
    const s = new Stack();
    s.push(1);
    s.push(22);
    s.push(21);
    s.clear();
    expect(0).toBe(s.top);
})

test("size()", () => {
    const s = new Stack();
    expect(0).toBe(s.size());
    s.push(1);
    s.push(22);
    s.push(21);
    expect(3).toBe(s.size());
    s.clear();
    expect(0).toBe(s.size());
})