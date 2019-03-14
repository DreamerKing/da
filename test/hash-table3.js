import HashTable from '../src/hash-table';

let names = ["David", "Jenifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
let ht = new HashTable();
ht.buildChains();
for (let i = 0; i < names.length; i++) {
    ht.put(names[i]);
}

ht.showDistro();