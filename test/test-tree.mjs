import BST from '../src/tree.mjs';
let bst = new BST();

bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);

// bst.bff(bst.root);

bst.inOrder(bst.root);
console.log("\n");
bst.remove(45)
bst.inOrder(bst.root);
console.log("\n");
bst.remove(23);
bst.inOrder(bst.root);
console.log("\n");
bst.remove(16);
bst.inOrder(bst.root);
console.log("\n");
