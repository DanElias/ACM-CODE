/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
    if(nums.length == 0 || nums == null){
        return false;
    }
    
    if(nums.length == 1){
        return true;
    }
    
    let goodIndex = nums.length - 1;
    
    for(let i = nums.length - 1; i >= 0; i--){
        if(i + nums[i] >= goodIndex){
            goodIndex = i;
        }
    }
    
    
    return goodIndex == 0;
    
    
   
};