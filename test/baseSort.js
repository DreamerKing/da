import Queue from '../src/queue';

// 基数排序
function distribute(nums, queues, n, digit){
    for (let i = 0; i < n; ++i) {
       if(digit == 1){
         queues[nums[i]%10].enqueue(nums[i]);  
       } else {
           queues[Math.floor(nums[i]/10 )].enqueue(nums[i]);
       } 
    }
}

function collect(queues, nums){
    let i = 0;
    for (let digit = 0; digit < 10; ++digit) {
       while (!queues[digit].empty()) {
           nums[i++] = queues[digit].dequeue();
       }  
    }
}

function display(arr){
    let str = ''
    for (let i = 0; i < arr.length; i++) {
       str += arr[i] + ' ';  
    }
    console.log(str);
}


let qs = new Queue();
for (let i = 0; i < 10; i++) {
   qs[i] = new Queue();
}

let nums = [];

for (let i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.floor(Math.random()*101));
}

display(nums);
distribute(nums, qs, 10, 1);
collect(qs, nums);
distribute(nums, qs, 10, 10);
collect(qs, nums);
display(nums);
