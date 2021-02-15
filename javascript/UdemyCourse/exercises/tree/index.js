// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data, children = []){
        this.data = data;
        this.children = children;
    }

    add(i){
        this.children.push(new Node(i));
    }

    remove(i){
        this.children = this.children.filter(node => {
            return node.data !== i
        });
    }
}

class Tree {
    constructor(root = null){
        this.root = root;
    }

    //queue
    bfs(fn){
        let node = this.root;
        if(!node){
            return;
        }
        let queue = [node];
        while(queue.length != 0){
            node = queue.pop();
            fn(node);
            //for(...node.children)
            for(let child of node.children){
                queue.unshift(child);
            }
        }
    }

    //stack
    dfs(fn){
        let node = this.root;
        if(!node){
            return;
        }
        let stack = [node];
        while(stack.length != 0){
            node = stack.shift();
            fn(node);
            //Unshift takes the whole array as it comes and adds it to the beginning
            //data order is kept
            stack.unshift(...node.children);
        }
    }
}

let tree = new Tree(new Node(1))
tree.root.add(2)
tree.root.add(3)
tree.root.children[0].add(4)
tree.root.children[0].add(5)
tree.root.children[1].add(6)
console.log("BFS:")
tree.bfs(node => {
    console.log(node.data);
})
console.log("DFS:")
tree.dfs(node => {
    console.log(node.data);
})

module.exports = { Tree, Node };
