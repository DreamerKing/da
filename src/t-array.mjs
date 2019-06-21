export default class TArray {
  constructor(size) {
    this.dataSource = [];
    this.pos = 0;
    this.size = size;
    this.gaps = [5, 3, 1];
    for (let i = 0; i < size; i++) {
      this.dataSource[i] = i;
    }
  }

  setData() {
    for (let i = 0; i < this.size; i++) {
      this.dataSource[i] = Math.floor(Math.random() * (this.size + 1));
    }
  }

  setGaps(arr){
    this.gaps = arr;
  }

  clear() {
    for (let i = 0; i < this.dataSource.length; i++) {
      this.dataSource[i] = 0;
    }
  }

  insert(element) {
    this.dataSource[this.pos++] = element;
  }

  toString() {
    let restr = "";
    for (let i = 0; i < this.dataSource.length; i++) {
      restr += this.dataSource[i] + " ";
      if (i > 0 && i % 10 == 0) {
        restr += "\n";
      }
    }
    return restr;
  }

  swap(arr, index1, index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }
  // 冒泡排序
  bubbleSort() {
    for (let i = this.size; i >= 2; --i) {
      for (let j = 0; j < i - 1; ++j) {
        if (this.dataSource[j] > this.dataSource[j + 1])
          this.swap(this.dataSource, j, j + 1);
       // console.log("Inner:", this.toString());
      }
     // console.log("Outer:", this.toString());
    }
  }

  // 选择排序
  slectionSort() {
    let min, temp;
    for (let i = 0; i <= this.dataSource.length - 2; i++) {
      min = i;
      for (let j = i + 1; j <= this.dataSource.length - 1; j++) {
        if (this.dataSource[j] < this.dataSource[min]) {
          min = j;
        }
      }
      this.swap(this.dataSource, i, min);
     // console.log(`${i} -> :`, this.toString());
    }
  }

  insertionSort(){
    let temp, inner;
    for (let i = 0; i < this.dataSource.length; i++) {
      temp = this.dataSource[i];
      inner = i;
      while (inner > 0 && (this.dataSource[inner - 1] >= temp)) {
        this.dataSource[inner] = this.dataSource[inner - 1];
        --inner;
      }
      this.dataSource[inner] = temp;
    //  console.log(`${i} ->:`, this.toString());
    }
  }

  shellSort(){
    for (let g = 0; g < this.gaps.length; g++) {
      for (let i = this.gaps[g]; i < this.dataSource.length; i++) {
        let temp = this.dataSource[i];
        let j;
        for (j = i; j >= this.gaps[g] && this.dataSource[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
           this.dataSource[j] = this.dataSource[j - this.gaps[g]];
        }
        this.dataSource[j] = temp;
      }
    }
  }

  shellSort2(){
    let N = this.dataSource.length;
    let h = 1;
    while(h < N / 3) {
      h = 3 * h + 1;
    }
    while (h >= 1) {
      for (let i = h; i < N; i++) {
        for (let j = i; j >= h && this.dataSource[j] < this.dataSource[j - h]; j -= h) {
          this.swap(this.dataSource, j, j - h);
        }
      }
      h = (h - 1)/3;
    }
  }

  mergeSort(){
    if(this.dataSource.length < 2){
      return;
    }
    let step = 1;
    let left, right;
    while (step < this.dataSource.length) {
      left = 0;
      right = step;
      while (right + step < this.dataSource.length) {
        this.mergeArrays(this.dataSource, left, left + step, right, right + step);
        left = right + step;
        right = left + step;
      }
      if(right < this.dataSource.length){
        this.mergeArrays(this.dataSource, left, left + step, right, this.dataSource.length);
      }
      step *= 2;
    }
  }

  mergeArrays(arr, startLeft, leftStop, startRight, stopRight){
     let rightArr = new Array(stopRight - startRight + 1);
     let leftArr = new Array(leftStop - startLeft + 1);
     let k = startRight;
     for (let i = 0; i < ( rightArr.length - 1); i++) {
      rightArr[i] = arr[k];
      ++k;
     }
     k = startLeft;
     for (let i = 0; i < (leftArr.length -1 ); i++) {
      leftArr[i] = arr[k];
      ++k;
     }
     rightArr[rightArr.lenght - 1] = Infinity;
     leftArr[leftArr.lenght - 1] = Infinity;
     let m = 0, n = 0;
     for (let k = startLeft; k < stopRight; k++) {
       if(leftArr[m] < rightArr[n]) {
         arr[k] = leftArr[m];
         m++;
       } else {
         arr[k] = rightArr[n];
         n++;
       }
     }
     console.log("Left: ", leftArr);
     console.log("Right: ", rightArr);
  }
}
