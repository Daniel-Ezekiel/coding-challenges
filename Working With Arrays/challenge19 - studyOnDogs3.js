'use strict';

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

///////////////////////////////////
const calcAverageHumanAge = function (agesArr) {
  // Task 1
  const humAges = agesArr.map(age => (age > 2 ? 16 + age * 4 : age * 2));
  // Task 2
  const only18Above = humAges.filter(age => age >= 18);
  // Task 3
  const average =
    only18Above.reduce((acc, c) => acc + c, 0) / only18Above.length;

  //   console.log(humAges);
  //   console.log(only18Above);
  console.log(average);
};
*/

const calcAverageHumanAge = agesArr =>
  agesArr
    .map(age => (age > 2 ? 16 + age * 4 : age * 2)) //Task 1 - human ages
    .filter(age => age >= 18) //Task 2 - only adults
    .reduce((acc, c, i, arr) => acc + c / arr.length, 0); //Task 3 - average

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
