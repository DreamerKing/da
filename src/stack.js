export default class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(element) {
        this.data[this.top++] = element;
    }

    pop() {
        return this.data[--this.top];
    }

    peek() {
        return this.data[this.top - 1]
    }

    get length() {
      return this.top;
    }
    
    clear() {
        this.data = [];
        this.top = 0;
    }

    toString() {
        return this.data;
    }
};
