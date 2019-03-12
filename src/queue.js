export default class Queue {
    constructor() {
        this.data = [];
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
        let str = '';
        for (let i = 0; i < this.data.length; i++) {
            str += this.data[i] + '\n';
        }
        return str;
    }

    empty() {
        if(!this.data.length){
            return true;
        }
        return false;
    }
};
