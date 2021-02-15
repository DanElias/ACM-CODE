// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for(let i = 0; i < n; i++){
        console.log(leftSteps(n, n - i) + '#' + rightSteps(n, i));
    }
}

function leftSteps(n, i){
    let str = ''
    for(let j = 0; j < n; j++){
        if(j < i){
            str += '_';
        } else {
            str += '#'
        }
    }
    return str;
}

function rightSteps(n, i){
    let str = ''
    for(let j = 0; j < n; j++){
        if(j < i){
            str += '#';
        } else {
            str += '_'
        }
    }
    return str;
}

pyramid(3);

module.exports = pyramid;
