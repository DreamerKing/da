import BST from "./bst.ts";
import { assertEquals } from "std/assert/mod.ts";

Deno.test("BST insert()", () => {
  const tree = new BST();
  tree.insert(12);
  tree.inOrder((key) => console.log(key));
});
