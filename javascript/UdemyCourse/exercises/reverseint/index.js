// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/**
 * 
 * @param {number} n
 * @return {number} rn
 */
function reverseInt(n) {
    //Math.sign(number) returns -1 o 1
    //.toString()
    //parseInt()
    //remember that javascript / division returns a float, never ints
    let input = n;
    let rn = 0

    input *= Math.sign(n);

    while(input != 0){
        rn = rn * 10 + input % 10;
        input = Math.floor(input / 10);
    }

    let res = Math.sign(n) * rn;

    return res;
}

function reverseInt2(n) {
    //Math.sign(number) returns -1 o 1
    //.toString()
    //parseInt()
    //remember that javascript / division returns a float, never ints
    let input = n;
    let rn = 0
    while(input != 0){
        rn = rn * 10 + input % 10;
        input = Math.floor(input / 10);
    }

    return rn
}

console.log(reverseInt(-15));

module.exports = reverseInt;
