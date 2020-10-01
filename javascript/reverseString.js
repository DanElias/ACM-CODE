/*
    given a string reverse it
    apple -> elppa
*/

/*
    Solution 1:
    1. convert into array
    2. reverse the array
    3. turn the array into string
*/

function revString(str){
    let arr = str.split("");
    arr.reverse();
    str = arr.join("");
    console.log(str);
}

revString("cmmi");

/*
    1. given a string - create empty
    2. loop through each char
    3. return the reversed string
*/

function rev(str) {
    let reversed = '';
    for(let character of str){
        reversed = character + reversed;
    }
    console.log(reversed);
}

rev("holi crayoli");