import List from './list';

let names = new List();
names.append("King");
names.append("Panpan");
names.append("Clayton");
console.log(names.toString());
names.remove("King");
names.append("Bray");
names.front();
console.log(names.getElement());
names.insert("Haha", "Clayton");
let rem = names.remove("Bray");
console.log(rem);
console.log(names.toString());
console.log(names.length);
console.log(names.current());
console.log(names.hasPrev());
console.log(names.hasNext());

// 从前往后遍历
for(names.front(); names.hasNext(); names.next()){
    console.log(names.getElement());  
}
// 从后往前遍历
for(names.end(); names.hasPrev(); names.prev()){
    console.log(names.getElement());   
}

