// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/**
 * 
 * @param {string} str
 * @return {boolean}
 */
function palindrome1(str) {
    if(str == undefined || str == null || str == ''){
        return false;
    }

    if(str == ' '){
        return true;
    }

    for(let i = 0, j = str.length - 1; i <= j; i++, j--){
        if(str[i] != str[j]){
            return false;
        }
    }
    return true;
}

function palindrome2(str){
    let reversed = str.split('').reverse().join('');
    return reversed === str;
}

function palindrome(str){
    //array.every((val) => val > 5)
    //second given input is the index
    //executes for every value of the array and if one is false, then the whole expression is false
    //bad because it makes a double check
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

console.log(palindrome("abaaba"));

module.exports = palindrome;
