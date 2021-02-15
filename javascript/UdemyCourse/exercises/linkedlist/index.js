// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    //insert at 0
    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    size(){
        let count = 0;
        let curr = this.head;
        while(curr){
            count++;
            curr = curr.next
        }
        return count;
    }

    //get at 0
    getFirst(){
        return this.head;
    }

    //insert at size() - 1
    getLast(){
        if(this.head == null){
            return null;
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        return curr;
    }

    clear(){
        this.head = null;
    }

    //remove at 0
    removeFirst(){
        if(this.head != null){
            this.head = this.head.next;
        }
    }

    //remove at size() - 1
    removeLast(){
        if(this.head == null){
            return
        }

        if(this.head.next == null){
            this.head = null;
            return
        }

        let curr = this.head.next;
        let prev = this.head;

        while(curr.next){
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
    }

    //insert at size() - 1
    insertLast(data){
        if(this.head == null){
            this.insertFirst(data);
            return
        }
        let last = this.getLast();
        last.next = new Node(data);
    }

    getAt(index){
        let curr = this.head;
        let count = 0;
        for(let count = 0; count <= index && curr != null; count++){
            if(index == count){
                return curr
            }
            curr = curr.next;
        }
        return null
    }

    removeAt(index){
        if(this.head == null){
            return;
        }
        if(index == 0){
            this.head = this.head.next;
        }

        let prev = this.getAt(index - 1);
        if(prev == null || prev.next == null){
            return;
        }
        prev.next = prev.next.next;
    }

    insertAt(data, index){
        if(this.head == null || index == 0){
            this.insertFirst(data);
            return;
        }
        let prev = this.getAt(index - 1) || this.getLast();
        let node = new Node(data, prev.next);
        prev.next = node;
    }
}

let ls = new LinkedList();
ls.insertFirst(1)
ls.insertFirst(12)
ls.insertFirst(2)
ls.insertFirst(14)
ls.insertFirst(15)
ls.insertFirst(16)
console.log(ls.size());
console.log(ls.getFirst());
console.log(ls.getLast());
ls.removeFirst();
ls.removeLast();
ls.insertLast(20);
console.log(ls.getAt(1));
ls.removeAt(2);
ls.insertAt(20);
//ls.clear();
console.log(ls)


module.exports = { Node, LinkedList };
