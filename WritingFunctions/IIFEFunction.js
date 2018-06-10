/**
 * IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
 * It is a design pattern which is also known as Self-Executing Anonymous Function
 */
var main = function () {
    (function () {
        for (var x = 0; x < 5; x++) {
            console.log(x);
        }
    })();
    console.log("x can not be accessed outside the block scope x value is :" + x);
}
main();