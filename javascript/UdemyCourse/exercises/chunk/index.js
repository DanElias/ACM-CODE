// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/**
 * 
 * @param {Array} array 
 * @param {number} size 
 */
function chunk1(array, size) {
    if(array.length == 0 || 
        size <= 0 || 
        size == null || 
        array == null){
        return [];
    }

    let res = [];
    let i = 0;
    for(let element of array){
        let curri = Math.floor(i/size);
        if(!res[curri]){
            res[curri] = []
        }
        res[curri].push(element);
        i++
    }

    return res;
}

/**
 * 
 * @param {Array} array 
 * @param {number} size 
 */
function chunk2(array, size) {
    if(array.length == 0 || 
        size <= 0 || 
        size == null || 
        array == null){
        return [];
    }

    let res = [];

    for(let element of array){
        let last = res[res.length - 1];
        if(!last || last.length == size){
            res.push([element]);
        } else {
            last.push(element);
        }
    }

    return res;
}


/**
 * Slice: (start, end) not including the element at index end. If end is greater
 * than the array length, then it just grabs the elements that do exist 
 * @param {Array} array 
 * @param {number} size 
 */
function chunk(array, size) {
    if(array.length == 0 || 
        size <= 0 || 
        size == null || 
        array == null){
        return [];
    }

    let res = [];
    let index = 0;

    while(index < array.length){
        res.push(array.slice(index, index + size));
        index += size;
    }

    return res;
}

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

module.exports = chunk;
