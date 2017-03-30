function getGreatestCommonDivisor(number, anotherNumber) {
    var greatestDivisor = 1;

    if (number < 2 || anotherNumber < 2) {
        return greatestDivisor;
    }

    for(var divisor = 2; number >= divisor && anotherNumber >= divisor; divisor++) {
        if(number % divisor == 0 && anotherNumber % divisor ==0){
            greatestDivisor = divisor;
        }
    }

    return greatestDivisor;
}
