import DLinkList from '../src/clink-list';

let ll = new DLinkList();
ll.insert("Beijing", "head");
ll.insert("GuangZhou", "Beijing");
ll.insert("HangZhou", "GuangZhou");
ll.display();

ll.remove("Beijing");
console.log(">>>");
ll.display();
console.log("<<<<");
ll.disReverse();
