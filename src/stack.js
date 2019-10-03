export default class ArrayStack {
    constructor(data = []) {
        this.data = data;
        this.top = data.length;
    }
    // 入栈
    push(element) {
        this.data[this.top++] = element;
    }
    //出栈
    pop() {
       let data = this.data[--this.top];
       this.data.length = this.top;
        return data;
      //  return this.data[--this.top];
    }
    //查看栈顶
    peek() {
        return this.data[this.top - 1]
    }
    //栈的大小
    get length() {
      return this.top;
    }
    //清栈
    clear() {
        this.data = [];
        this.top = 0;
    }

    size(){
        return this.top;
    }

    isEmpty() {
        return this.top === 0;
    }

    toString() {
        return this.data;
    }
};
