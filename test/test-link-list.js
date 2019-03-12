import LinkList from '../src/link-list';

let ll = new LinkList();
ll.insert("Beijing", "head");
ll.insert("GuangZhou", "Beijing");
ll.insert("HangZhou", "GuangZhou");
ll.display();

ll.remove("Beijing");
console.log(">>>");
ll.remove("head");
ll.display();
