function reverseWords(text) {
    var rev = [],
        wordLen = 0;
    for(var i = text.length-1; i>=0; i--){
        if(text[i]==' ' || i==0){
            rev.push(text.substr(i,wordLen+1));
            wordLen = 0;
        }
        else
            wordLen++;
    }
    return rev.join(' ');
}

function reverseWordsNatively(text) {
    return text.split(' ').reverse();
}
