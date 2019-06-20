export default class TArray {
  constructor(size) {
    this.dataSource = [];
    this.pos = 0;
    this.size = size;
    for (let i = 0; i < size; i++) {
      this.dataSource[i] = i;
    }
  }

  setData() {
    for (let i = 0; i < this.size; i++) {
      this.dataSource[i] = Math.floor(Math.random() * (this.size + 1));
    }
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
}
