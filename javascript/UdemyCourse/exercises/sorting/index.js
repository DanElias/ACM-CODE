// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

//Move the biggest values on to the last position in the window of the array 
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < (arr.length - i - 1); j++){
            if(arr[j] > arr[j + 1]){
                const save = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = save;
            }
        }
    }
    return arr;
}

//selects the lowest element in the subarray and then inserts it at the beginning of the subarray
function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let indexOfMin = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[indexOfMin]){
                indexOfMin = j;
            }
        }
        if(arr[indexOfMin] < arr[i] ){
            const save = arr[i];
            arr[i] = arr[indexOfMin];
            arr[indexOfMin] = save;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length == 1){
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));
    return merge(left, right);
}

function merge(left, right) {
    let result = []
    while(left.length != 0 && right.length != 0){
        if(left[0] < right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return [...result,...left,...right]
}

console.log(bubbleSort([97, 10, -30, 100, 0, 5]));
console.log(selectionSort([97, 10, -30, 100, 0, 5]));
console.log(mergeSort([97, 10, -30, 100, 0, 5]));

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
