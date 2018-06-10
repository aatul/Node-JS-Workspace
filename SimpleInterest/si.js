var simpleInterest = function calculate(p, n, r) {

    return "The interest is " + (p * n * r / 100);

    /*
    where 
    p = principal amount(primary loan amount)
    n = number of periods in Year(duration)
    r = rate of interest per year
    */
}

console.log(simpleInterest(1000,1,10));