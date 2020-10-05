/**
 * @param {number[]} nums
 * @return {number}
 */


// []
// [1]
//[ -1 | 3 | 4 | 5 | 2 | 2 | 2 | 2 ]

var lengthOfLIS = function(nums) {
    if(nums.length == 0){
        return 0;
    }
    
    if(nums.lenght == 1){
        return 1;
    }
    
    let memo = [];
    
    for(let i = 0; i < nums.length; i++){
        memo.push(1);
    }
    
    
    // Test Case 1:                                 
    // [ -1 | 3 | 4 | 5 | 2 | 2 | 2 | 2 ] -> nums array
    // [ 1  | 2 | 3 | 4 | 2 | 2 | 2 | 2 ] -> memo array
    
    // Test Case 2:[1,3,6,7,9,4,10,5,6] max = 6
    
    //                          
    // [ 1 | 3 | 6 | 7 | 9 | 4 | 10 | 5 | 6 ] -> nums array
    // [ 1 | 2 | 3 | 4 | 5 | 3 | 6 | 1 | 1 ] -> memo array
    
    for(let j = 1; j < nums.length; j++){
        for(let i = 0; i < j; i++){
            if(nums[j] > nums[i]){
                memo[j] = Math.max(memo[j], memo[i] + 1);
            }
        }
    }
    
    let max_num = memo[0];
    
    for(let i = 1; i < memo.length; i++){
        if(max_num < memo[i]){
            max_num = memo[i];
        }
    }
    
    //max_num = 4
    
    return max_num;
    
};