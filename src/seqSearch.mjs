export default function seqSearch(arr, data){
    for (let i = 0, len = arr.length; i < len ; i++) {
        if(arr[i] == data){
            return true;
        }
    }
    return false;
}
// 返回查找到的元素的下标，如果没有找到则返回-1。
export  function seqSearch2(arr, data) {
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}
// 自组织数据，将可能要查找的数据放置在数据集的起始位置，可以更快地查找到
export function seqSearch3(arr, data) {
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] == data) {
            if(i > 0){
                swap(arr, i, i - 1);
            }
            return true;
        }
    }
    return false;
}

// 自组织数据，将找到的元素移动到数据集的起始位置，但是如果这个元素已经很接近起始位置，则不移动；而只对一定范围外的元素进行交换。
export function seqSearch4(arr, data) {
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] == data) {
            if (i > (len * 0.2)){
                swap(arr, 0, i);
            }
            return true;
        }
    }
    return false;
}


function swap(arr, l, h){
    let temp = arr[l];
    arr[l] = arr[h];
    arr[h] = temp;
}

export function findMin(arr = []){
    let min = arr[0];
    for (let i = 1, len = arr.length; i < len; i++) {
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

export function findMax(arr = []) {
    let max = arr[0];
    for (let i = 1, len = arr.length; i < len; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

export function binSearch(arr = [], data){
    let h = arr.length - 1;
    let l = 0;
    while (l < h) {
        let m = Math.floor((l + h) / 2);
        if(arr[m] < data){
            l = m + 1
        } else if( arr[m] > data) {
            h = m - 1;
        } else { 
            return m;
        }
    }
    return -1
}

export function count(arr = [], data){
    let count = 0;
    let len = arr.length;
    let p = binSearch(arr, data);
    if(p > -1){
        ++count;
        for(let i = p - 1; i > 0; --i){
            if(arr[i] == data){
                ++count;
            }else{
                break;
            }
        }
        for (let j = p + 1; j < len; j++) {
            if (arr[j] == data) {
                ++count;
            } else {
                break;
            }
        }
    }
    return count;
}