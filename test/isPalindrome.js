import Stack from "../src/stack";

function isPalindrome(text){
    let s = new Stack();
    for (let index = 0; index < text.length; index++) {
       s.push(text[index]);
    }

    let rtext = '';
    while (s.length) {
        rtext += s.pop();
    }
    if(text == rtext){
        return true;
    }
    return false;
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("hahahah"));

