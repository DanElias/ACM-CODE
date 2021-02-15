// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weaveChafa(sourceOne, sourceTwo) {
    let weaved = new Queue();
    let commonLenght = Math.min(sourceOne.data.length, sourceTwo.data.length);
    for(let i = 0; i < commonLenght; i++){
        weaved.add(sourceTwo.remove());
        weaved.add(sourceOne.remove());
    }

    while(sourceOne.data.length > 0){
        weaved.add(sourceOne.remove());
    }
    while(sourceTwo.data.length > 0){
        weaved.add(sourceTwo.remove());
    }

    console.log(weaved);
    return weaved;
}

function weave(sourceOne, sourceTwo) {
    let weaved = new Queue();

    while(sourceOne.peek() || sourceTwo.peek()){
        if(sourceOne.peek()){
            weaved.add(sourceOne.remove());
        }
        if(sourceTwo.peek()){
            weaved.add(sourceTwo.remove());
        }
    }
    console.log(weaved)
    return weaved;
}

let sourceOne = new Queue();
sourceOne.add(1);
sourceOne.add(2);
sourceOne.add(3);
let sourceTwo = new Queue();
sourceTwo.add('A');
sourceTwo.add('B');
sourceTwo.add('C');
sourceTwo.add('D');
sourceTwo.add('E');
console.log(sourceOne);
console.log(sourceTwo);
weave(sourceOne, sourceTwo);

module.exports = weave;
