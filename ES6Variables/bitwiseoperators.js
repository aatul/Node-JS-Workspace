var a = 2; // Bit presentation 10 
var b = 3; // Bit presentation 11 
var result; 

result = (a & b); 
console.log("(a & b) => ", result); 

result = (a | b); 
console.log("(a | b) => ", result); 

result = (a ^ b); 
console.log("(a ^ b) => ", result); 

result = (~b); 
console.log("(~b) => ", result); 

result = (a << b); 
console.log("(a << b) => ", result); 

result = (a >> b); 
console.log("(a >> b) => ", result); 
