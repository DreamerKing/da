export class Node {
    constructor(data, left, right) {
        this.data = data;
        this.count = 1;
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

    update(data){
        let grade = this.find(data);
        grade.count++;
        return grade;
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

    remove(data){
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data){
        if(node == null){
            return null;
        }
        if(data == node.data){
            // 没有子节点
            if(node.left == null && node.right == null){
                return null;
            }
            // 没有左子节点
            if(node.left == null){
                return node.right;
            }

            // 没有右子节点
            if(node.right == null){
                return node.left;
            }

            // 有左右子节点 寻找右子树的最小值或左子树的最大值
            let tempNode = this.getSmallest(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        } else if(data < node.data){
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }

    // 获取右子树上最小的节点
    getSmallest(node){
        let current = node;
        if(node == null){
            return null;
        }

        while (current.left !== null) {
            current = current.left;
        }
        return current;
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