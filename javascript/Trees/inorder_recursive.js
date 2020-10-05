/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 //Given the root of a binary tree, return the inorder traversal of its nodes' values.


let result = []; 

var traverse = function(root){
    if(!root){
        return result;
    }
    traverse(root.left);
    result.push(root.val);
    traverse(root.right);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    traverse(root);
    return result;
};