export default class HashTable {
  constructor() {
    this.table = new Array(137);
  }
  simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    console.log("Hash value: " + data + " > " + total);
    return total % this.table.length;
  }

  betterHash(str, arr) {
      const H = 37;
      let total = 0;
      for (let i = 0; i < str.length; i++) {
          total += H * total + str.charCodeAt(i);
      }
      total = total % arr.length;
      if(total < 0){
          total = this.table.length - 1;
      }
      console.log("Hash value: " + str + " > " + total);
      return parseInt(total);
  }

  put(data) {
    let pos = this.betterHash(data, this.table)//this.simpleHash(data);
    this.table[pos] = data;
  }

  showDistro() {
    let n = 0;
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}
