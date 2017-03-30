function getPrimeFactors(n){
    var factors = [];

    for(var divisor = 2; n >2; ) {
        if(n % divisor == 0){
            factors.push(divisor);
            n= n/ divisor;
        } else {
            divisor++;
        }
    }

    return factors;
}
