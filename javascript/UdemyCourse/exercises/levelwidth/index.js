// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
// Given:
//        1
//      /   \
//    3       2
//  /   \     |
// 5     3    9

//        1
//      /  
//    3      
//  /   \     
// 5     3    

//               1
//           /       \ 
//         1           1 
//       /   \       /   \
//      1     n     n     1
//    /   \ /   \ 
//  1     n n    1


function levelWidth(root) {
    let levels = []
    if(!root){
        return levels;
    }
    return  bfs(root, 0, levels);
}

// Given:
//     0      <- [1]
//   / |  \
// 1   2   3  <- [1, 3, 2]
// |       |
// 4       5  <- [1, 1, 1]
// Answer: [1, 3, 2]

//It actually works more as a dfs
function bfs(root, level, levels){
    if(!root){
        return levels;
    }
    levels[level]? levels[level] += 1 : levels.push(1);
    for(let child of root.children){
        levels = bfs(child, level + 1, levels);
    }
    return levels;
}


let Node = require("./node.js")
let root = new Node(0);
root.add(1)
root.add(2)
root.add(3)
root.children[0].add(4);
root.children[1].add(6);
root.children[2].add(5);
root.children[2].children[0].add(10);
console.log(levelWidth(root));

module.exports = levelWidth;
