// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * 
 * @param {string} str 
 * @return {string} rstr
 */
function reverse1(str) {
    if(str == null || str == ' ' || str == undefined || typeof str == "number"){
        return '';
    }
    //split() -> converts a string into an array
    let rstr = str.split('').reverse().join('');
    return rstr;
}

function reverse2(str) {
    if(str == null || str == ' ' || str == undefined || typeof str == "number"){
        return '';
    }
    let rstr = '';
    for(let char of str){
        rstr = char + rstr;
    }
    return rstr;
}

function reverse(str) {
    if(str == null || str == ' ' || str == undefined || typeof str == "number"){
        return '';
    }
    //reduce(), take all values in an array and condense to one singular value
    //the first argument enters the reduce arrow function
    //whatever is returned reenters the arrow function
    //repeats until all arguments of the array are used
    //ES6 2015 Arrow Function
    debugger;
    console.log(str.split('').reduce((rstr, char) => char + rstr, ''))
    return str.split('').reduce((rstr, char) => char + rstr, '');
}

reverse('asdf');

module.exports = reverse;
