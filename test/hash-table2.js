import HashTable from '../src/hash-table';

function getRandomInt(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

function genStudentData(arr){
    for (let i = 0; i < arr.length; i++) {
        let num = '';
        for (let j = 0; j < 9; j++) {
            num += Math.floor(Math.random()*10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}

let studentNum = 10;
let arrSize = 97;
let idLen = 9;
let students = new Array(studentNum);
genStudentData(students);
for (let i = 0; i < students.length; i++) {
   console.log(students[i].substring(0, 8) + " " + students[i].substring(9) );
}
let ht = new HashTable();
for (let i = 0; i < students.length; i++) {
    ht.put(students[i]);
}

ht.showDistro();