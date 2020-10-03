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
 * @return {number[][]}
 */

/**
* Breadth First Traversal - Level Traversal
*
*
*/

let result = []
let level = []

var zigzagLevelOrder = function(root) {
    let h = height(root); //calculate the height - number of levels
    
    for(let i = 1; i<=h; i++){
        printLevel(root, i);
        result.push(level);
        level = [];
    }
    
    return result;
    
};

var printLevel = function(root, level_i){
        if(!root){
            return;
        }
        if(level_i == 1){
            level.push(root.val);
        } else if (level_i > 1){
            printLevel(root.left, level_i - 1);
            printLevel(root.right, level_i - 1);
        }
};

//Calculate tree height -> each level
var height = function(root){
    if(!root){
        return 0;
    }
    
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);
    
    if(leftHeight > rightHeight){
        return leftHeight + 1
    } 
    return rightHeight + 1
    
};