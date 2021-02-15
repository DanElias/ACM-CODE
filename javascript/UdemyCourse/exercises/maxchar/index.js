// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/**
 * 
 * @param {string} str 
 * @returns {char} maxChar
 */
function maxChar(str) {

    if(str == undefined || str == '' || str == ' ' || str == null){
        return ' ';
    }

    let charCount = {};

    for(let char of str){
        charCount[char] ? charCount[char]++ :  charCount[char] = 1;
    }

    let max = 0;
    let maxChar = '';
    for(let char in charCount){
        if(charCount[char] > max){
            max = charCount[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxChar("###jsssjs"));
console.log(maxChar(null));

module.exports = maxChar;
