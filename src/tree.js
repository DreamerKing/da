export class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show(){
        return this.data;
    }
}

export default class BST {
    constructor(){
        this.root = null;
    }

    insert(data){
        let n = new Node(data, null, null);
        if(this.root == null){
            this.root = n;
        } else {
            let current = this.root;
            let parent;
            while (true) {
               parent = current;
               if(data < current.data){
                   current = current.left;
                   if(current == null){
                       parent.left = n;
                       break;
                   }
               } else {
                   current = current.right;
                   if(current == null){
                       parent.right = n;
                       break;
                   } 
               } 
            }
        }
    }

    inOrder(node){
        if(!(node == null)){
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }

    preOrder(node){
        if(!(node == null)){
            console.log(node.show());
            this.preOrder(node.left);
            this.preOrder(node.right);
            
        }
    }

    postOrder(node){
        if(node !== null){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show());
        }
    }

    getMin(){
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    getMax(){
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data){
        let current = this.root;
        while (current !== null) {
            if(current.data == data){
                return current;
            } else if(data < current.data){
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }
}