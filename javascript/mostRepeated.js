/*
    32eddseew3
    #%he333ll#l#o

    Find the char that appears the most
    and total number of times it appears
*/

function mostRepeated(str){
    let dict = {};
    let max = 0;
    let max_char = "";

    for(let char of str){
        dict[char]? dict[char]++ : dict[char] = 1;
    }

    for(let char in dict){
        if(dict[char] >= max){
            max = dict[char];
            max_char = char;
        }
    }

    console.log(max);
    console.log(max_char);
    console.log(`${max_char} appears ${max} times`)
}

mostRepeated("#%he3#33     ll##l#o");

//Test cases
/*
    empty str
    empty space
    tie
*/