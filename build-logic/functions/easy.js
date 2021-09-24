//1. Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

// function power(a, b) {
//   return a ** b;
// }
// console.log(power(2, 3));

// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80
// function areaOfHexagon(l) {
//   return (3 * Math.sqrt(3) * l ** 2) / 2;
// }
// console.log(areaOfHexagon(10));

// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3
// function noOfWords(str) {
//   let string = str.split(" ");
//   return string.length;
// }
// console.log(noOfWords("We are neoGrammers"));

// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

// function findMin(...theArgs) {
//   theArgs.sort();
//   return theArgs[0] + " is smaller";
// }

// console.log(findMin(5, 2, 3));
// expected output: 1

// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)
// function findMax(...args) {
//   const max = Math.max(...args);
//   return max + " is max";
// }
// console.log(findMax(2, 4, 5, 77, 4, 2, 1));

// Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle

// function typeOfTriangle(a, b, c) {
//   if (a + b + c === 180) {
//     if (a === 30 && b === 60 && c === 90) {
//       console.log("Scalen Triangle");
//     } else if (a === 60 && b === 60 && c === 60) {
//       console.log("Equilateral Triangle");
//     } else if (a === b || a === c || b === c) {
//       console.log("Isosceles Triangle");
//     }
//   } else {
//     console.log("not a triangle");
//   }
// }
// typeOfTriangle(30, 60, 90);
// typeOfTriangle(60, 60, 90);
// typeOfTriangle(60, 60, 60);
// typeOfTriangle(70, 70, 40);
