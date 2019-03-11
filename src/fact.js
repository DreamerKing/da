import Stack from './stack';

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

function factariol(n){
    if(n == 0){
        return 1;
    } 
    return n * factariol(n - 1);
}

console.log(fact(5));
console.log(factariol(5));

