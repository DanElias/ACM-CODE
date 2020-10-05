/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


var inorderTraversal = function(root) {
    let result = [];
    let current = root;
    let stack = [];
    
    while(current || stack.length > 0){
        while(current){
            stack.push(current);
            current = current.left;
        }

        current = stack[stack.length - 1];
        result.push(current.val);
        stack.pop();
        current = current.right;
    }
    
    return result
    
};