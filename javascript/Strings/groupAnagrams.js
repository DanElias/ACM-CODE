/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = [];
    if(strs.length == 0){
        return res;
    }
    let anagrams = {};
    for(str of strs){
        let keyStr = str.split('').sort().join('');
        anagrams[keyStr]? anagrams[keyStr].push(str) : anagrams[keyStr] = [str];
    }
    for(let key in anagrams){
        res.push(anagrams[key]);
    }
    return res;
};