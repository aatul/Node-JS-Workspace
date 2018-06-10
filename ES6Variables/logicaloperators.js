var avg = 20; 
var percentage = 90; 

console.log("Value of avg: " + avg + " ,value of percentage: " + percentage); 

var res = ((avg > 50) && (percentage > 80)); 
console.log("(avg>50)&&(percentage>80): ", res); 

var res = ((avg > 50) || (percentage > 80)); 
console.log("(avg>50)||(percentage>80): ", res); 

var res = !((avg > 50) && (percentage > 80)); 
console.log("!((avg>50)&&(percentage>80)): ", res);