function reverseString(text) {
    text = text.split('');
    var len = text.length,
        halfIndex = Math.floor(len / 2) - 1,
        revText;
    for (var i = 0; i <= halfIndex; i++) {
        revText = text[len - i - 1];
        text[len - i - 1] = text[i];
        text[i] = revText;
    }
    return text.join('');
}

function reverseStringNatively(text) {
    return (!text || text.length < 2) ? text : text.split('').reverse().join('');
}
