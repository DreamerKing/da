import Stack from '../src/stack';

function fact(n){
    let s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    let pro = 1;
    while (s.length) {
        pro *= s.pop();
    }
    return pro;
}

/* function factariol(n){
    if(n == 0){
        return 1;
    } 
    return n * factariol(n - 1);
} */

console.log(fact(5));
// console.log(factariol(5));

function isMatch(expStr = ""){
    let s = [];
    let result = -1;
    for (let i = 0, len = expStr.length ; i < len; i++) {
        if(expStr.charCodeAt(i) === "("){
            s.push(ch);
        }
        if(expStr.charCodeAt(i) === ")" && s.pop() !== "(") {
            result = i;
            break;
        } 
    }
    return result;
}

console.log(isMatch("2.3 + 2 ( 3 + 4 ) + ) + ( 2 + 3) + 1"));


