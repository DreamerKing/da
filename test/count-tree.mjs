import BST from '../src/count-tree.mjs';
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter a grade: '
  });

let bst = new BST();

function prArray(arr){
    let str = arr[0] + " ";
    for (let i = 1; i < arr.length; i++) {
        str += arr[i].toString() + ' '
        if(i % 10 == 0){
            str += "\n";
        }        
    } 
    console.log(str);
}

function genArray(length){
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random()*101)
    }
    return arr;
}

let grades = genArray(100);
prArray(grades);

for (let i = 0; i < grades.length; i++) {
    let g = grades[i];
    let grade = bst.find(g);
    if(grade == null){
        bst.insert(g);
    } else {
        bst.update(g);
    }
}

rl.prompt();

rl.on('line', (line) => {
    let g = parseInt(line);
    let ag = bst.find(g);
    if(ag == null){
        console.log("No occurrences of " + g);
    } else {
        console.log("Occurrences of " + g + ":" + ag.count);  
    }
    rl.prompt();
  }).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
  });

