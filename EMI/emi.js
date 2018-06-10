// Formula => EMI = [((p*r)/12) (1+r/12)^n]/[(1+r/12)^n - 1 ]
/*
    where 
    p = principal amount(primary loan amount)
    n = number of periods in Year(duration)
    r = rate of interest per year
    */

var principal=0.0;
var noOfYears=0.0;
var rate=0.0;

var emi = function calculate(p, n, r) {

    principal = p;
    noOfYears = n;
    rate = r;

    return "The EMI is " + ((((p * r) / 12) * (1 + r / 12) ^ n) / ((1 + r / 12) ^ n - 1));
}

var total = function calculate(emi,noOfYears) {

    return "The Total is " + (emi*noOfYears*12);
}

console.log(emi(1000, 1, 10));
console.log(total(emi,noOfYears));