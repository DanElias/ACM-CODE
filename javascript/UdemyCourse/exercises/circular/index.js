// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular2(list) {
    if(!list.head){
        return false;
    }
    let node = list.head;
    let visited = new Set();
    while(node){
        if(visited.has(node)){
            return true;
        }
        visited.add(node);
        node = node.next;
    }
    return false
}

function circular(list){
    if(!list.head){
        return false;
    }
    let slow = list.head;
    let fast = list.head;
    while(fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast){
            return true;
        }
    }
    return false;
}

let modules = require("./linkedlist.js");
let LinkedList = modules.LinkedList;
let Node = modules.Node;
const l = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
l.head = a;
a.next = b;
b.next = c;
c.next = b;
console.log(circular(l)) // true

module.exports = circular;
