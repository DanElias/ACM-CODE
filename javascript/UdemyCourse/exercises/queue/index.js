// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;


//FIFO
class Queue2 {
    constructor(){
        this.queue = [];
    };

    add(n){
        if(this.queue.length == 0){
            this.queue.push(n)
            return;
        }
        
        this.queue.push(this.queue[this.queue.length - 1])
        for(let i = this.queue.length - 2; i >= 1; i--){
            this.queue[i] =  this.queue[i - 1]
        }
        this.queue[0] = n;

        console.log(this.queue);
    }

    remove(){
        if(this.queue.length == 0){
            return;
        }

        let removed = this.queue[this.queue.length - 1];
        let newContent = []
        for(let i = 0; i < this.queue.length - 1; i++){
            newContent.push(this.queue[i]);
        }
        this.queue = newContent;
        console.log(this.queue);
        return removed;
    }

}

//FIFO
class Queue {
    constructor(){
        this.data = [];
    };

    add(n){
        this.data.unshift(n);
        console.log(this.data);
    }

    remove(){
        return this.data.pop();
        console.log(this.data);
    }

}

let queue = new Queue();
queue.add(1)
queue.add(2)
queue.add(3)
queue.add(4)
queue.remove()
queue.remove()
queue.remove()
queue.add(3)
queue.add(5)
queue.remove()

module.exports = Queue;
