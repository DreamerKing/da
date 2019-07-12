import fs from 'fs';
import { binSearch, seqSearch4 } from '../src/seqSearch.mjs';
import quickSort from '../src/quickSort.mjs';

fs.readFile('./test/text', { encoding: 'utf8', flag: 'r' }, (err, res) => {
    if(err) throw err;
    let words = res.split(/\W+/);
    // let wds = quickSort(words);
    let search = "undertaking";
    console.time("time");
    console.log(seqSearch4(words, search));
    console.timeEnd("time");
    console.time("time2");
    let wds = quickSort(words);
    console.log(binSearch(wds, search));
    console.timeEnd("time2");
});

