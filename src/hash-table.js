export default class HashTable {
  constructor() {
    this.table = new Array(137);
    this.values = [];
  }
  simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
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
      return parseInt(total);
  }
/* 
  put(key, data) {
    let pos = this.betterHash(data, this.table)//this.simpleHash(data);
    let index = 0;
    if(!this.table[pos][index]){
      this.table[pos][index + 1] = data;
      ++index;
    }else{
      while (this.table[pos][index]) {
        ++index;
      }
      this.table[pos][index] = data;
    } 
    
  }
 */

 put(key, data){
   let pos = this.betterHash(key);
   if(!this.table[pos]){
     this.table[pos] = key;
     this.values[pos] = data;
   } else {
     while (this.table[pos]) {
       pos++;
     }
      this.table[pos] = key;
      this.values[pos] = data;
   }
 }

 get(key){
   let hash = this.betterHash(key) || -1;
   if(hash > -1){
     for (let i = hash; table[hash] != undefined; i++) {
       if(this.table[hash] == key){
         return this.values[hash]
       }
     }
   }
   return undefined;
 }
  /* get(key){
    let index = 0;
    let pos = this.betterHash(key);
    if(this.table[pos][index] == key){
      return this.table[pos][index + 1];
    } else {
      index += 2;
      while (this.table[pos][index]!= key) {
        index += 2;
      }
      return this.table[pos][index + 1];
    }
    return undefined;
  }
 */
  buildChains() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = new Array();
    }
  }

  showDistro() {
    let n = 0;
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i][0]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

// 开放寻址散列
/* 
当发生碰撞时，线性探测法检查散列表中的下一个位置是否为空。
如果为空，就将数据存入该位置；如果不为空，则继续检查下一个位置，直到找到一个空位置为止。
当存储数据使用的数据特别大时，选择线性探测法要比开链法好。
如果数组大小是待存数据个数的1.5倍，使用开链法；
如果是两倍以上，使用线性探测法。
 */
