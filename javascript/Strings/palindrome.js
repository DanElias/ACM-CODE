/*
    check if the str is a palindrome
*/

function isPalindrome(str){
    let i = 0;
    let j = str.length - 1;
    while(i <= j){
        if(str[i] != str[j]){
            console.log("false");
            return false;
        } 
        i++;
        j--;
    }
    console.log("true");
    return true;
}

isPalindrome("ajskksja")

/*
1. reverse string
2. check with origin if they are the same
*/

function isPalindrome2(str){
    let arr = str.split("").reverse().join("");
    return str === arr ? "true" : "false";
}

console.log(isPalindrome2("ajsksssksja"));