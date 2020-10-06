/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let p = headA;
    let q = headB;
    
    let hset = new Set();
    
    while(p){
        hset.add(p)
        p = p.next;
    }
    
        
    while(q){
        if(hset.has(q)){
            return q
        }
        q = q.next;
    }
    
    return null;
    
    
};