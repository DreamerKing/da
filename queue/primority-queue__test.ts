import { assertEquals } from "std/assert/mod.ts";
import PQueue from "./primary-queue.ts";

Deno.test(" Primority Queue enqueue()", () => {
  let pq = new PQueue();
  pq.enqueue("Dreamer", 2);
  pq.enqueue("King", 1);
  assertEquals(pq.size, 2);
  assertEquals(pq.toString(), "King > Dreamer");
});

Deno.test(" Primority Queue dequeue()", () => {
  let pq = new PQueue();
  pq.enqueue("Dreamer", 2);
  pq.enqueue("King", 1);
  assertEquals(pq.size, 2);
  assertEquals(pq.dequeue(), "King");
  assertEquals(pq.dequeue(), "Dreamer");
  assertEquals(pq.size, 0);
});
