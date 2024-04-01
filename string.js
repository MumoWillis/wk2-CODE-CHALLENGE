const tqbf = 'The Quick Brown Fox' //Creation of a string called The Quick Brown Fox

//The function accepts the string and swaps the Case of each letter
function swapCase(char){
switch(true){
    //All lowercase letters are changed to uppercase
    case/[a-z]/.test(char):
        return char.toUpperCase(tqbf);
        break
    //All uppercase letters are changed to lowercase
    case/[A-Z]/.test(char):
        return char.toLowerCase(tqbf);
    default:
            return char;

    }
//The above code can only allow the swapping of individual characters(one at a time)
}
console.log(swapCase('T'))

// For the whole sentence:
const swapSentence = swapCaseSentence(tqbf)
function swapCaseSentence(tqbf){
    let swapSentence = ""
    for( const char of tqbf){
        swapSentence +=swapCase(char);
    }
    return swapSentence
}

console.log(swapSentence)//output = (tHE qUICK bROWN fOX)