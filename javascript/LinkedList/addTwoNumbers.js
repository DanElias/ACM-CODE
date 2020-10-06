/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    /**
    *   1st node is - units, 2nd tens, 3rd hundreds and so on
    *   Add the val of each node, traverse the nodes of each list at the same time
    *   If its greater than 10, then add that 1 to the next sum of vals of nodes
    *   result % 10 -> result for that node   result/10 -> the number we add to the next pair of summed nodes
    *   return linked list so we add nodes to that new linked list
    */
    
    let result = new ListNode();
    let resHead = result;
    result.val = 0;
    
    let cur1 = l1;
    let cur2 = l2;
    let carry = 0;
    
    while(cur1 != null && cur2 != null){
        let addition = cur1.val + cur2.val + carry;
        result.val = addition % 10;
        carry = Math.floor(addition / 10);
        cur1 = cur1.next;
        cur2 = cur2.next;
        if(cur1 != null && cur2 != null){
            result.next = new ListNode();
            result = result.next;
        }
    }
    
    if(cur1 != null || cur2 != null){
        while(cur1 != null){
            result.next = new ListNode();
            result = result.next
            let addition = cur1.val + carry;
            result.val = addition % 10;
            carry = Math.floor(addition / 10);
            cur1 = cur1.next;
        }
        
        while(cur2 != null){
            result.next = new ListNode();
            result = result.next
            let addition = cur2.val + carry;
            result.val = addition % 10;
            carry = Math.floor(addition / 10);
            cur2 = cur2.next;
        }
    }
    
    if(carry != 0){
        result.next = new ListNode();
        result = result.next;
        result.val = carry;
    }
    
    
    return resHead;
    
};