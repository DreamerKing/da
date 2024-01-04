import Stack from "./weakmap-stack.ts";
import { assertEquals } from "std/assert/mod.ts";

Deno.test("stack.push()", () => {
  let s = new Stack();
  s.push([1, 2, 3]);
  assertEquals(s.size, 3);
  s.push(4);
  assertEquals(s.size, 4);
  assertEquals(s.pop(), 4);
  assertEquals(s.size, 3);
});

Deno.test("stack.peek()", () => {
  let s = new Stack();
  s.push([1, 2, 3]);
  assertEquals(s.peek(), 3);
  s.push(4);
  assertEquals(s.peek(), 4);
  s.pop();
  assertEquals(s.peek(), 3);
  s.clear();
  assertEquals(s.peek(), undefined);
});

Deno.test("stack.clear()", () => {
  let s = new Stack();
  assertEquals(s.isEmpty(), true);
  s.clear();
  assertEquals(s.size, 0);
  s.push(1);
  assertEquals(s.size, 1);
  s.clear();
  assertEquals(s.size, 0);
});
