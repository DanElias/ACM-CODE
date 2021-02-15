// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/**
 * 1. create the matrix
 * @param {number} n 
 */
function matrix(n) {
    let results = [];
    for(let i = 0; i < n; i++){
        results.push([]);
    }

    let counter = 1;
    let startCol = 0;
    let startRow = 0;
    let endCol = n - 1;
    let endRow = n - 1;

    while( startCol <= endCol && startRow <= endRow ){
        //top row - move down
        for(let col = startCol; col <= endCol; col++){
            results[startRow][col] = counter;
            counter++;
        }
        startRow++;
        //right column - move left
        for(let row = startRow; row <= endRow; row++){
            results[row][endCol] = counter;
            counter++;
        }
        endCol--;
        //bottom row - move up
        for(let col = endCol; col >= startCol; col--){
            results[endRow][col] = counter;
            counter++;
        }
        endRow--;
        //left column -  move right
        for(let row = endRow; row >= startRow; row--){
            results[row][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return results;
}

console.log(matrix(5));

module.exports = matrix;
