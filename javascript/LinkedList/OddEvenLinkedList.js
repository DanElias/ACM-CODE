/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    
    /**
    * Change the ptrs
    *
    *
    */
    
    if(!head){
        return head
    }
    
    let p = head;
    let firstq = head.next;
    let q = firstq;
    
    while(p && p.next && p.next.next){
            p.next = p.next.next;
            p = p.next;
            q.next = q.next.next;
            q = q.next
    }
    
    p.next = firstq;

    return head;
    
};