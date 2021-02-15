// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels1(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let occurences = {};
    let count = 0;
    for(let char of str){
        if(occurences[char]){
            count++;
            occurences[char]++;
        } else if(vowels.find(element => element == char)){
            occurences[char] = 1;
            count++;
        }
    }

    console.log(Object.entries(occurences));
    return count;
}

/**
 * includes = checks if string has a substring
 * @param {string} str 
 * @returns {number} counter
 */
function vowels2(str){
    let counter = 0;
    let vowelstr = "aeiou";
    let vowelarr = ["a", "e", "i", "o", "u"]; //doesnt work with more than one char

    for(let char of str.toLowerCase()){
        if(vowelarr.includes(char)){
            counter++;
        }
    }
    return counter;
}

//REGEX
function vowels(str){
    let matches = str.match(/[aeiou]/gi); //returns array of all the mastches
    //g makes sures that it doesn't stop at the first match
    //i stands for case insensitive
    return matches? matches.length : 0;
}

console.log(vowels('Hi There!'));
console.log(vowels('Why do you ask?'));
console.log(vowels('Why'));

module.exports = vowels;
