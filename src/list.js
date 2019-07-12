export default class List {
    constructor() {
      this.size = 0; //列表的大小
      this.pos = 0; //当前位置
      this.data = [];  // 列表数据
    }
    /* 
    添加元素element到列表末尾
    @params element
    */
    append(element) {
        this.data[this.size++] = element;
    }

    /* 
    查找元素element是否在列表中，如果存在则返回所在位置，否则返回-1
    @params element
    @return number
    */
    find(element) {
        for (let index = 0, len = this.data.length ; index < len; index++) {
            if(this.data[index] == element){
                return index;
            }  
        }
        return -1;
    }

    /* 
    删除列表中第一项为element的元素
    @params element
    @return boolean
    */
    remove(element) {
        let index = this.find(element);
        if(index > -1){
            this.data.splice(index, 1);
            --this.size;
            return true;
        }
        return false;
    }

    /* 
    在列表项after之后插入元素element
    @params element
    @params after
    @return boolean
    */
    insert(element, after) {
        let index = this.find(after);
        if(index >= -1){
            this.data.splice(index + 1, 0, element);
            ++this.size;
            return true;
        }
        return false;
    }

    /* 
    清空列表
    */
    clear() {
        this.data = [];
        this.size = 0;
        this.pos = 0;
    }

    contains(element) {
        // 可以直接调find方法
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
