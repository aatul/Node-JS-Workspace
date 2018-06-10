var hello = function (n) {

    var str = 'Hello ' + n;
    
    return str
}

// Initialize & find the start_time of program
var date1 = new Date();
var start_time = date1.getTime();

// Call the function 5 times and log results on the console
console.log(hello('Aatul'));
console.log(hello('Node JS'));
console.log(hello('Mandsaur'));
console.log(hello('India'));
console.log(hello('World'));

// Find out the end time of program
var date2 = new Date();
var end_time = date2.getTime();

// Find execution time by subtracting start from end
var execution_time = end_time - start_time;
console.log("Time to execute program: " +execution_time);
