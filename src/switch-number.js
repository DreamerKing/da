import Stack from './stack';

function mulBase(num, base){
    let s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);

    let converted = '';
    while (s.length > 0) {
        converted += s.pop();
    }
    return converted;
}

let num = 32;
let newNum = mulBase(32, 2);
console.log(newNum);
newNum = mulBase(32, 8);
console.log(newNum);

