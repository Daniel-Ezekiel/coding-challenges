'use strict';

///////////////////////////////////////
// Coding Challenge #4

/* 
    Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

    The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

    THIS TEST DATA (pasted to textarea)
    underscore_case
    first_name
    Some_Variable 
    calculate_AGE
    delayed_departure

    SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
    underscoreCase      ✅
    firstName           ✅✅
    someVariable        ✅✅✅
    calculateAge        ✅✅✅✅
    delayedDeparture    ✅✅✅✅✅

    HINT 1: Remember which character defines a new line in the textarea 😉
    HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
    HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
    HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

    Afterwards, test with your own test data!

    GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // Split all the words into an array
  const allWords = text.toLowerCase().split('\n');

  // Use a loop to split each element, if it is 2 words, continue, else do not operate on the element
  for (const [i, word] of [...allWords.entries()]) {
    const separate = word.trim().split('_');
    const [first, second] = separate;
    if (separate.length === 2) {
      const camelCase = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
      )}`;
      const finalResult = `${camelCase.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`;
      console.log(finalResult);
    }
  }
});

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   // Split all the words into an array
//   const allWords = text.toLowerCase().split('\n');

//   // Use a loop to split each element, if it is 2 words, continue, else do not operate on the element
//   for (let i = 0; i < allWords.length; i++) {
//     const separate = allWords[i].trim().split('_');
//     if (separate.length === 2) {
//       const camelCase =
//         separate[0] +
//         separate[1].replace(separate[1][0], separate[1][0].toUpperCase());
//       const finalResult = camelCase.padEnd(20, ' ').padEnd(21 + i, '✅');
//       console.log(finalResult);
//     }
//   }
// });

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   // Split all the words into an array
//   const allUnderscoreCases = text.split('\n');

//   // Use a loop to split each element, if it is 2 words, continue, else do not operate on the element
//   let camelCase = []; // An array to store all camelCase words
//   for (const underscoreCase of allUnderscoreCases) {
//     // Convert underscoreCase to lowercase
//     const lowCase = underscoreCase.toLowerCase();
//     // Split underscoreCase
//     const splitUCase = lowCase.split('_');
//     // If length of resulting array is 2, convert first letter of second element to uppercase
//     if (splitUCase.length === 2) {
//       const camCaseWord =
//         splitUCase[0] +
//         splitUCase[1].replace(splitUCase[1][0], splitUCase[1][0].toUpperCase());

//       camelCase.push(camCaseWord); // Push camelCase word into camelCase array
//     }
//   }

//   const camelCaseFinal = []; // An array to store the camelCase words with the checkmarks

//   // Loop through the camelCase array and padEnd with spaces, the further padEnd with the check marks using the index of the cameCase word
//   for (let i = 0; i < camelCase.length; i++) {
//     let camCaseWordFinal = camelCase[i]
//       .padEnd(20, ' ')
//       .padEnd(20 + (i + 1), '✅');
//     camelCaseFinal.push(camCaseWordFinal);
//   }

//   // Join the camelCaseFinal array with the escape character for new lines
//   const finalResult = camelCaseFinal.join('\n');
//   console.log(finalResult);
// });
