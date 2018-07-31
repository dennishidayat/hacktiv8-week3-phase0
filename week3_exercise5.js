function palindrome(input){
    var j = input.length -1;
    for (i = 0; i <= j; i++){
        if (input[i] !== input[j]){
            return false;
        } else {
            j--;                                    
        }
    }
    return true;
}

console.log(palindrome("11011"));