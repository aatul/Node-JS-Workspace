var totalSum = function (A, B) {

    var addition = A + B;
    var subtraction = A - B;
    var multiplication = A * B;
    var division = A / B;

    var total_sum = addition + subtraction + multiplication + division;
    return total_sum
}

console.log(totalSum(5,4));