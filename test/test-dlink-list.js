import DLinkList from '../src/dlink-list';

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
