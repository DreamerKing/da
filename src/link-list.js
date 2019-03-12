export default class LinkList {
    constructor() {
        this.head = new Node('head');
    }
    
    find(element) {
        let current = this.head;
        while (current.element != element) {
            current = current.next;
        }
        return current;
    }

    insert(newElement, item) {
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    findPrev(element){
        let current = this.head;
        while (current.next && (current.next.element != element)) {
            current = current.next;
        }
        return current;
    }

    remove(element){
        let prevNode = this.findPrev(element);
        if(prevNode.next){
            prevNode.next = prevNode.next.next;
        }
    }

    display(){
        let current = this.head;
        while(current.next) {
            console.log(current.next.element);
            current = current.next;
        }
    } 
};

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
