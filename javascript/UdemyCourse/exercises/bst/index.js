// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }

    insert(data){
        if(data == null){
            return;
        }
        if(data < this.data){
            this.left == null? this.left = new Node(data) : this.left.insert(data);
        } else {
            this.right == null? this.right = new Node(data) : this.right.insert(data);
        }
    }

    contains(data){
        if(this.data == data){
            return this;
        }
        if(data < this.data){
            if(this.left != null){
                return this.left.contains(data);
            } else {
                return null;
            }
        } else {
            if(this.right != null){
                return this.right.contains(data);
            } else {
                return null;
            }
        }
        return null;
    }
}

let root = new Node(10);
let numbers = [5, 15, 0, -5, 3, 20];
for(let num of numbers){
    root.insert(num);
}
console.log(root.left.data + " " + root.right.data);
console.log(root.contains(3));

module.exports = Node;
