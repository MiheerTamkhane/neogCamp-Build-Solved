// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8
const power = (a, b) => a ** b;
console.log(power(3, 2));

// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80
// formulae : a = cubeRoot(3) / 2 * a**2;
const areaOfHexagon = (side) => (3 * Math.sqrt(3) * side ** 2) / 2;
console.log(areaOfHexagon(3));

// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3
const noOfWords = (str) => str.split(" ").length;
console.log(noOfWords("hi i am miheer"));

// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)
const findMin = (...rest) => Math.min(...rest);
console.log(findMin(1, 2, 3, 4));

// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)
const findMax = (...rest) => Math.max(...rest);
console.log(findMax(1, 8, 3, 4));

// Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

const typeOfTriangle = (...rest) => {
  let [a, b, c] = rest;
  if (a === b && b === c) return "Equilateral Triangle";
  else if (a === b || b === c) return "Isosceles Triangle";
  else return "Scalene Triangle";
};
//Equilateral Triangle
console.log(typeOfTriangle(60, 60, 60));
//Isosceles Triangle
console.log(typeOfTriangle(45, 45, 90));
//Scalene Triangle
console.log(typeOfTriangle(30, 60, 90));
