function findNonRepeatingChar(text) {
    var len = text.length,
        char = null,
        charCount = {};
    for(var i =0; i<len; i++){
        char = text[i];
        if(charCount[char]){
            charCount[char]++;
        }
        else
            charCount[char] = 1;
    }
    for (var j in charCount){
        if (charCount[j]==1)
            return j;
    }
}
