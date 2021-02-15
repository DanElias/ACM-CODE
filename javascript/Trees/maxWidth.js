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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    if(!root){
        return 0;
    }
    let queue = [];
    queue.push([root, 1]);
    let max = 0;
    while(queue.length != 0){
        let lefti = queue[0][1] || 0;
        let righti = queue[queue.length - 1][1] || 0;
        max = Math.max(max, (lefti - righti) + 1);
        let newQueue = [];
        while(queue.length != 0){
            let node = queue.pop();
            if(node[0].left){
                newQueue.unshift([node[0].left, node[1] * 2])
            }
            if(node[0].right){
                newQueue.unshift([node[0].right, node[1] * 2 + 1])
            }
        }
        queue = newQueue;
    }
    return max
};
