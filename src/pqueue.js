export default class Pqueue {
  constructor() {
    this.data = [];
  }

  enqueue(element) {
    this.data.push(element);
  }

  dequeue() {
      let entry = 0;
      for (let i = 0; i < this.data.length; i++) {
          if(this.data[i].code < this.data[entry].code){
              entry = i;
          }   
      }
    return this.data.splice(entry,1);
  }

  front() {
    return this.data[0];
  }

  back() {
    return this.data[this.data.length - 1];
  }

  toString() {
    let str = "";
    for (let i = 0; i < this.data.length; i++) {
      str += this.data[i].name + '  code:' + this.data[i].code + "\n";
    }
    return str;
  }

  empty() {
    if (!this.data.length) {
      return true;
    }
    return false;
  }
}
