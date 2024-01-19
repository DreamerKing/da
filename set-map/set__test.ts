import Set from "./set.ts";
import { assertEquals } from "std/assert/mod.ts";

Deno.test("add()", () => {
  const s = new Set();
  assertEquals(s.size, 0);
  s.add(2);
  assertEquals(s.size, 1);
  assertEquals(s.toString(), "2");
  s.add(1);
  assertEquals(s.size, 2);
  assertEquals(s.toString(), "2,1");
});

Deno.test("contains()", () => {
  const s = new Set();
  s.add(1);
  assertEquals(s.contains(1), true);
  s.add(NaN);
  assertEquals(s.contains(NaN), true);
  assertEquals(s.size, 2);
  console.log(s.toString());
});
