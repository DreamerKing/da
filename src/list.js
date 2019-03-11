export default class List {
    constructor() {
      this.size = 0;
      this.pos = 0;
      this.data = [];  
    }
    append(element) {
        this.data[this.size++] = element;
    }

    find(element) {
        for (let index = 0; index < this.data.length; index++) {
            if(this.data[index] == element){
                return index;
            }  
        }
        return -1;
    }

    remove(element) {
        let index = this.find(element);
        if(index > -1){
            this.data.splice(index, 1);
            --this.size;
            return true;
        }
        return false;
    }

    insert(element, after) {
        let index = this.find(after);
        if(index >= -1){
            this.data.splice(index + 1, 0, element);
            ++this.size;
            return true;
        }
        return false;
    }

    clear() {
        this.data = [];
        this.size = 0;
        this.pos = 0;
    }

    contains(element) {
        for (let index = 0; index < this.data.length; index++) {
            if(element == this.data[index]){
                return true;
            }   
        }
        return false;
    }

    front() {
        this.pos = 0;
    }

    end() {
       this.pos = this.size - 1 
    }

    prev() {
        --this.pos;
    }

    next() {
        if(this.pos < this.size){
            ++this.pos;
        }
    }

    current() {
        return this.pos;
    }

    moveTo(position) {
        this.pos = position;
    }

    getElement() {
      return this.data[this.pos];
    }

    hasNext(){
        return this.pos < this.size;
    }

    hasPrev(){
        return this.pos >= 0;
    }
    

    get length() {
      return this.size;
    }
    
    toString() {
        return this.data;
    }

};
