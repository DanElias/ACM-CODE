// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/**
 * REGEX
 * ASCII 65-90 UpperCase, 97-122 LowerCase
 * @param {string} stringA 
 * @param {string} stringB 
 */
function anagrams1(stringA, stringB) {
    
    //removes spaces and special chars
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase(); 
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

    let mapA = buildMap(stringA);
    let mapB = buildMap(stringB);

    if(Object.keys(mapA).length != Object.keys(mapB).length){
        return false;
    }

    for(let char in mapA){
        console.log(char)
        if(mapA[char] != mapB[char]){
            return false;
        }
    }

    return true;
}

/**
 * Builds a char map
 * @param {string} str 
 */
let buildMap = function(str){
    let map = new Map();

    for(let char of str){
        if(char.charCodeAt(0) >= 97  && char.charCodeAt(0) <= 122){
            map[char]? map[char]++ : map[char] = 1;
        }
    } 

    return map;
}

/**
 * REGEX
 * ASCII 65-90 UpperCase, 97-122 LowerCase
 * @param {string} stringA 
 * @param {string} stringB 
 */
function anagrams(stringA, stringB) {
    
    //removes spaces and special chars
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join(''); 
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
    
    return stringA === stringB

}

function sortMap(){
    var map = new Map();

    //MAP
    /*
    map.set('rail', 0);
    map.set('way', 6);
    map.set('station', 1);
    console.log(map.keys())
    console.log(map.get('rail'))
    //var mapAsc = new Map([...map.entries()].sort((a,b) => b[1]-a[1]));
    console.log(mapAsc)
    */

    //OBJECT
    map[2] = 0;
    map[3] = 6;
    map[1] = 1;
    //Number keys sort automatically, but not strings
    console.log(Object.entries(map));
    console.log(Object.keys(map));
    console.log(Object.values(map));
    //sorts by values descending - ascending numbers
    var sorted = new Map(Object.entries(map).sort((a,b) => b[1]-a[1]));
    console.log(sorted)

    map['rail'] = "b";
    map['way'] = "a";
    map['station'] = "c";
    console.log(Object.entries(map));
    console.log(Object.keys(map));
    console.log(Object.values(map));
    console.log(map.rail)
    //sorts by keys
    var sorted = new Map(Object.entries(map).sort());
    console.log(sorted)

}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));
console.log(anagrams('One one', 'one one c'));

sortMap()

module.exports = anagrams;
