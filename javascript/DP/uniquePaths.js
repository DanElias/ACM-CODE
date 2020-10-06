/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    /**
    * Directions: current: (x,y)  ,  right(x+1, y), down(x, y-1)
    * x < cols, y < rows
    */
    
    if(m < 0  || n < 0 || m == null || n == null){
        return 0;
    }
    
    let rows = m;
    let cols = n;
    let memo = [] //matrix
    
    for(let i = 0; i < rows; i++){
        let aux_array = []
        for(let j = 0; j < cols; j++){
            aux_array.push(0);
        }
        memo.push(aux_array);
    }
  
    /**
    * [ 1 | 1 | 1 | 1  | 1  | 1  | 1 ]
    * [ 1 | 2 | 3 | 4  | 5  | 6  | 7 ]
    * [ 1 | 3 | 6 | 10 | 15 | 21 | 28]
    */
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(i == 0 || j == 0){
                 memo[i][j] = 1
            } 
            else {
                memo[i][j] = memo[i-1][j] + memo[i][j-1];
            }
        }
    }
    
    return memo[rows-1][cols-1];
    
    
};