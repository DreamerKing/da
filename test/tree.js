import BST from '../src/tree.mjs';
let bst = new BST();

beforeAll(()=> {
    bst.insert(23);
    bst.insert(45);
    bst.insert(16);
    bst.insert(37);
    bst.insert(3);
    bst.insert(99);
    bst.insert(22);
   /*  console.log("In Order:");
    bst.inOrder(bst.root);
    
    console.log("Pre Oreder: ");
    bst.preOrder(bst.root);
    
    console.log("Post Order:");
    bst.postOrder(bst.root);  */
})

test('getMin() is 3', () => {
    expect(bst.getMin()).toBe(3);
});

test('getMax() is 99', () => {
    expect(bst.getMax()).toBe(99);
});

test('find(16)', () => {
    expect(bst.find(16).show()).toBe(16);
});

test('find(12)', () => {
    let f = bst.find(12)
    expect(f).toBe(null);
});

test("remove 45", () => {
    bst.inOrder(bst.root);
    console.log(bst.remove(45));
    bst.inOrder(bst.root);
  //  expect(bst.remove(45).show()).toBe(45);
})



