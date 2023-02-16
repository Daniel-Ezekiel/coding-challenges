'use strict';

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.round(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
const upperLim = portion => Math.round((portion += 0.1 * portion));
const lowerLim = portion => Math.round((portion -= 0.1 * portion));

const dogSarahUpper = upperLim(dogSarah.recFood);
const dogSarahLower = lowerLim(dogSarah.recFood);

/*
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarahUpper
      ? 'too much'
      : dogSarah.curFood < dogSarahLower
      ? 'too little'
      : 'just right'
  }`
);
// console.log(dogSarah);
*/

// 3.
const ownersEatTooMuch = dogs.filter(
  dog => dog.curFood > upperLim(dog.recFood)
);
const ownersEatTooLittle = dogs.filter(
  dog => dog.curFood < lowerLim(dog.recFood)
);
// console.log(ownersEatTooLittle, ownersEatTooMuch);

// 4.
const dogOwners1 = ownersEatTooLittle.map(dog => dog.owners).flat();
console.log(`${dogOwners1.join(' and ')}'s dogs eat too little!`);

const dogOwners2 = ownersEatTooMuch.map(dog => dog.owners).flat();
console.log(`${dogOwners2.join(' and ')}'s dogs eat too much!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
console.log(
  dogs.some(
    dog =>
      dog.curFood <= upperLim(dog.recFood) &&
      dog.curFood >= lowerLim(dog.recFood)
  )
);

// 7.
console.log(
  dogs.filter(
    dog =>
      dog.curFood <= upperLim(dog.recFood) &&
      dog.curFood >= lowerLim(dog.recFood)
  )
);

// 8.
const dogsCopy = dogs.slice();
dogsCopy.sort((a, z) => a.recFood - z.recFood);
console.log(dogsCopy);
