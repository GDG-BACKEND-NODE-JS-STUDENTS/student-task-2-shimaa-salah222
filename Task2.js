let number1 = 10; 
let number2 = 5;  
const constantValue = 2; 
var globalVar = "Shimaa Salah"; 


// Basic arithmetic operations
let sum = number1 + number2; 
let difference = number1 - number2; 
let product = number1 * number2; 
let Division = number1 / number2; 
let modulo = number1 % number2; 

console.log("Arithmetic Operations:");
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Division:", Division);
console.log("Modulo:", modulo);


// Logic operations
let isEqual = number1 === number2; 
let isGreater = number1 > number2; 
let isLessOrEqual = number1 <= number2; 

console.log("\nLogic Operations:");
console.log("Is Equal:", isEqual);
console.log("Is Greater:", isGreater);
console.log("Is Less or Equal:", isLessOrEqual);

// Type conversion
let numberAsString = number1.toString(); 
let stringToNumber = parseInt("20"); 

console.log("\nType Conversion:");
console.log("Number as String:", numberAsString); 
console.log("String to Number:", stringToNumber); 
console.log("Type of numberAsString:", typeof numberAsString); 
console.log("Type of stringToNumber:", typeof stringToNumber); 


console.log("\nGlobal Variable:");
console.log(globalVar); 