// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

/**
 * 
 * @param {LinkedList} list 
 */
function midpoint(list) {
    let slow = list.head;
    let fast = list.head;
    if(!slow){
        return null;
    }
    while(fast.next){
        if(!fast.next.next){
            return slow;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

const modules = require("./linkedlist.js");
const LinkedList = modules.LinkedList;

const l = new LinkedList();
l.insertLast('a')
l.insertLast('b')
l.insertLast('c')
console.log(midpoint(l)); // returns { data: 'b' }

module.exports = midpoint;
