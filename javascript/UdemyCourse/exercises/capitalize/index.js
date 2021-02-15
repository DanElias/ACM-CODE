// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/**
 * slice(beginIndex, endIndex) -> grabs all the chars starting from
 * the beginningIndex to the endIndex (not inclusive of the endIndex)
 * @param {string} str 
 */
function capitalize1(str) {
    let words = str.split(' ');
    let newStr = [];
    for(let word of words){
        let newWord = word[0].toUpperCase() + word.slice(1);
        newStr.push(newWord);
    }

    return newStr.join(' ');
}

/**
 * If the char to the left is a space, then capitalize the current char
 * What to do if the first char is a special char?
 * @param {string} str 
 */
function capitalize(str) {
    let result = str[0].toUpperCase();
   
    for(let i = 1; i < str.length; i++){
        if(str[i - 1] == ' '){
            result += str[i].toUpperCase();
        } else {
            result += str[i]
        }
    }

    return result;
}

console.log(capitalize("a short sentence"));
console.log(capitalize("Look!!, it is working!"));

module.exports = capitalize;
