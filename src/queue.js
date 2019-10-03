export default class ArrayQueue {
    constructor(data = []) {
        this.data = data;
    }

    get size() {
        return this.data.length;
    }

    enqueue(element) {
        this.data.push(element);
    }

    dequeue() {
        return this.data.shift()
    }

    front() {
        return this.data[0]
    }

    back() {
        return this.data[this.data.length - 1];
    }

    toString(){
        // let str = '';
        // for (let i = 0; i < this.data.length; i++) {
        //     str += this.data[i] + ' -> ';
        // }
        return this.data.join(' -> ');
    }

    isEmpty() {
        return this.data.length == 0;
    }
};
