/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} postorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(postorder, inorder) {
    let n = inorder.length;
    if(n == 0) return null;
    return buildTree_recursive(inorder, 0, n, postorder, 0, n);
};

var buildTree_recursive = function(inorder, i1, i2, postorder, p1, p2) {
    
    if(i1 >= i2 || p1 >= p2){
        return null
    }
    
    //Root is the last element of the defined section of the postoder array
    let root = new TreeNode(postorder[p2 - 1]);
    let index_of_root = inorder.indexOf(postorder[p2 - 1]);
    let diff = index_of_root - i1;
    root.left = buildTree_recursive(inorder, i1, i1 + diff, postorder, p1, p1 + diff);
    root.right = buildTree_recursive(inorder, i1 + diff + 1, i2, postorder, p1 + diff, p2 - 1);
    
    return root
    
};