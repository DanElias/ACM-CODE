/**
 * @param {character[][]} grid
 * @return {number}
 */

 // Get the number of islands present in the grid.
 
var numIslands = function(grid) {
    
    // Current node = (x,y)
    // Directions: left (x-1,y), right (x+1,y), bottom (x,y-1), top (x,y+1)
    // Edge cases: x < 0, x > num_cols, y > num_rows, y < 0, empty grid
    
    if(!grid || grid.length == 0){
        return 0;
    }
    
    let islands = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] == 1){
                traverse(i, j, grid, rows, cols);
                islands += 1;
            }
        }
    }
    
    return islands;
    
};

var traverse = function(x, y, grid, rows, cols){
    if(x < 0 || y < 0 || x >= rows || y >= cols || grid[x][y] != 1){
        return;
    }
    
    grid[x][y] = 2;
    
    traverse(x - 1, y, grid, rows, cols);
    traverse(x + 1, y, grid, rows, cols);
    traverse(x, y - 1, grid, rows, cols);
    traverse(x, y + 1, grid, rows, cols);
    
    return;
}