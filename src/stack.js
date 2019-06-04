export default class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
    // 入栈
    push(element) {
        this.data[this.top++] = element;
    }
    //出栈
    pop() {
        return this.data[--this.top];
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

    toString() {
        return this.data;
    }
};
