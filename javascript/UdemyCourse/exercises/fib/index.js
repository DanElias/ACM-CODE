// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//recursive - exponential nono
function fib1(n) {
    if(n == 1){
        return 1;
    }
    if(n <= 0){
        return 0;
    }

    return fib(n - 1) + fib(n - 2);
}

//recursive 2 - exponential nono
function fib2(n) {
    if(n < 2){
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

//iterative
function fib3(n){
    let fibArr = [0,1];
    for(let i = 2; i <= n; i++){
        let a = fibArr[i - 1];
        let b = fibArr[i - 2];
        fibArr.push(a + b);
    }
    return fibArr[n]
}

//Dynamic Programming
let dict = {0:0, 1:1};
function fib(n){
    if(dict[n] != undefined){
        return dict[n];
    }
    dict[n] = fib(n - 1) + fib(n - 2);
    return dict[n];
}

console.log(fib(9))

module.exports = fib;
