function reverseInPlace(text){
    return text.split(' ').reverse().join(' ').split('').reverse().join('');
}