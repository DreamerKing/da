export default class DLinkList {
     constructor() {
        this.head = new Node('head');
        this.head.next = this.head;
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
        newNode.prev = current;
        current.next = newNode;
    }

    findPrev(element){
        let current = this.head;
        while (current.next && (current.next.element != element) && (current.next.element !== 'head')) {
            current = current.next;
        }
        return current;
    }

    remove(element){
        let current = this.find(element);
        if(current.next && (current.next.element !== 'head')){
            current.prev.next = current.next;
            current.next.prev = current.prev;
            current.next = null;
            current.prev = null;
        }
    }

    findLast(){
      let current = this.head;
      while (current.next && (current.next.element !== "head")) {
        current = current.next;
      }
      return current;
    }

    disReverse(){
      let current = this.findLast(); 
      while (current.prev && (current.element !== "head")) {
        console.log(current.element);
        current = current.prev;
      }
    }

    display(){
        let current = this.head;
        while(current.next && (current.next.element !== "head")) {
            console.log(current.next.element);
            current = current.next;
        }
    } 
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}