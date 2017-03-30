function findSubString(text, subString){
    var idx = 0,
        i = 0,
        j = 0,
        len = text.length,
        subLen = subString.length;

    for(; i<len; i++){

        if(text[i] == subString[j])
            j++;
        else
            j = 0;

        if(j == 0)
            idx = i;
        else if (j == subLen)
            return idx;
    }

    return -1;

}
