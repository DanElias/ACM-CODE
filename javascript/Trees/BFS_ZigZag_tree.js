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
let level_num = 1;

var zigzagLevelOrder = function(root) {
    
    result = [];
    level = [];
    level_num = 1;
    
    if(!root){
        return []
    }
    
    let h = height(root);
    
    
    for(let i = 1; i <= h; i++){
        level_num = i;
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
            if(level_num % 2 == 0){
                printLevel(root.right, level_i - 1);
                printLevel(root.left, level_i - 1);
            } else {
                printLevel(root.left, level_i - 1);
                printLevel(root.right, level_i - 1);
            }
            
        }
};

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