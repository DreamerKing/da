import Dictionary from '../src/dictonary';

let d = new Dictionary();
d.add("King", 12);
d.add("Haha", 100);
d.add("PanPan", 23);
d.add("King", 26);
console.log(d.count());
d.showAll();
console.log(">>>");
d.remove("Haha");
d.add("Aa", "kdkd");
d.showAll();
console.log(d.count());
console.log(">>>>>");
d.clear();
console.log(d.count());
d.showAll();


