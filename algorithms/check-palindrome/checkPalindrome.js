function isPalindrome(text){
    var len = text.length;
    for(var i =0; i < len/2; i++){
        if (text[i]!== text[len -1 -i])
            return false;
    }
    return true;
}
