'use strict';

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// Understand
/*
    An array of temperatures, and I need to return a string;
    the string says the temperature forecast for as many days as the array length
*/

//Sub-problems
/*
    - Get the total number of days
    - Loops through the temperatures array
    - Create a string and add some things to that string using the loop
    - return the completed string
*/

const printForecast = function (arr) {
  let str = '... ';

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }

  console.log(str);
};

printForecast([15, 23, -10]);
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
