import { assertEquals } from "std/assert/mod.ts";
import Queue from "./index.ts";

Deno.test("Queue enqueue()", () => {
  let q = new Queue();
  assertEquals(q.size, 0);
  q.enqueue(1);
  assertEquals(q.front(), 1);
  assertEquals(q.size, 1);
  assertEquals(q.toString(), "1");
});

Deno.test("Queue dequeue()", () => {
  let q = new Queue();
  assertEquals(q.size, 0);
  q.enqueue(1);
  q.enqueue(2);
  assertEquals(q.front(), 1);
  assertEquals(q.size, 2);
  assertEquals(q.toString(), "1,2");
  assertEquals(q.dequeue(), 1);
  assertEquals(q.dequeue(), 2);
  assertEquals(q.size, 0);
});

Deno.test("Queue clear()", () => {
  let q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  assertEquals(q.size, 3);
  q.clear();
  assertEquals(q.size, 0);
});
