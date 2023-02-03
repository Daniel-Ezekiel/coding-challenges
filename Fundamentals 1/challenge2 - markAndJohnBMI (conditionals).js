'use strict';

/*
  Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
  
  Your tasks:
  1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
  2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
  
  Hint: Use an if/else statement 😉
  
  GOOD LUCK 😀
*/

let markMass = 95;
let markHeight = 1.88;

let johnMass = 85;
let johnHeight = 1.76;

markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

// TO check if Mark's BMI is greater than John's
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
