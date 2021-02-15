// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

/**
 * Modulo helps you know the multiples
 * @param {number} n 
 */
function fizzBuzz(n) {
    if(n == null || n == undefined || typeof n != "number"){
        return '';
    }

    for(let i = 1; i <= n; i++){
        if(i % 15 === 0){
            console.log("fizzbuzz");
        } else if(i % 3 === 0){
            console.log("fizz");
        } else if(i % 5 === 0){
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(15);

module.exports = fizzBuzz;
