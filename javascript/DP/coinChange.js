/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    if(amount == 0 || coins.length == 0){
        return 0;
    }
    
    //  i  
    // change = 11
    //[ 1 | 2 | 5 ]
    //[ 0 | 1 | 1 | 2 | 2 | 1 | 2 | 2 | 3 | 3 | 2 | 3 ]
    //  0   1   2   3   4   5   6   7   8   9   10  11
    //Bottom-up approach
    
    // if the coins cannot return the change, return -1
    
    let memo = [];
    memo.push(0);
    
    for(let i = 1;  i <= amount; i++){
        memo.push(amount + 1);
    }
    
    //i = 11
    
    for(let i = 1; i <= amount; i++){
        for(let j = 0; j < coins.length; j++){
            if(i >= coins[j]){
                memo[i] = Math.min(memo[i - coins[j]] + 1, memo[i]);
            }
        }
    }
    
    return memo[amount] > amount ? -1 : memo[amount];
    

};