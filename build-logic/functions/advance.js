// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
const encodeString = (str, step) => {
  const strArr = str.split("");
  const result = strArr.map((item) => {
    return item.charCodeAt(0);
  });
  const newResult = result.map((item) => {
    return String.fromCharCode(item + step);
  });
  console.log(newResult);
  return newResult.join("");
};
console.log(encodeString("neog", 2));

// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

// function toSentenceCase(str) {
//   let newStr = str.split(" ");
//   for (let i = 0; i < newStr.length; i++) {
//     newStr[i] = newStr[i][0].toUpperCase() + newStr[i].substr(1);
//     console.log(newStr[i]);
//     console.log(newStr[i][0]);
//     console.log(newStr[i].substr(1));
//   }
//   return newStr.join(" ");
// }

// console.log(toSentenceCase("we are neoGrammers"));

// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
// function sortArray(arr) {

//   return arr.sort((a, b) => {
//     return a - b;
//   });
// }
// console.log(sortArray([100, 83, 32, 9, 45, 61]));

// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen
// function reverseCharactersOfWord(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseCharactersOfWord("we are neoGrammers"));
