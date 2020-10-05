/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

 //https://www.youtube.com/watch?v=GeltTz3Z1rw
 
var buildTree = function(preorder, inorder) {
    let n = inorder.length;
    if(n == 0) return null;
    return buildTree_recursive(inorder, 0, n, preorder, 0, n);
};

var buildTree_recursive = function(inorder, i1, i2, preorder, p1, p2) {
    
    if(i1 > i2 || p1 >= p2){
        return null
    }
    
    //Root is the last element of the defined section of the postoder array
    let root = new TreeNode(preorder[p1]);
    
    let index_of_root = inorder.indexOf(preorder[p1]);
    
    
    root.left = buildTree_recursive(inorder, i1, index_of_root - 1, preorder, p1 + 1, p2);
    root.right = buildTree_recursive(inorder, index_of_root + 1, i2, preorder, p1 + index_of_root - i1 + 1, p2);
    
    return root
    
};