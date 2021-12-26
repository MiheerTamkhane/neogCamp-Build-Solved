// Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

// function sumOfArr(arr) {
//   return arr.reduce((prev, curr) => {
//     return prev + curr;
//   });
// }
// console.log(sumOfArr([10, 4]));

// Find average of an array and display the output.
// function avgOfArr(arr) {
//   return Math.floor(
//     arr.reduce((prev, curr) => {
//       return prev + curr;
//     }) / arr.length
//   );
// }
// console.log(avgOfArr([10, 4, 10]));

//Find maximum and minimum of an array.
// console.log(minAndMax([5, 2, 3, 4]));
// function minAndMax(arr) {
//   return Math.max(...arr) + " " + Math.min(...arr);
// }

// Find Median and Mode of an array.
// Median : (N+1/2)th term.
// Mode : Most repeating term

// console.log(meanAndMedian([1, 2, 3, 3, 3, 4, 4]));
// function meanAndMedian(arr) {
//   let median = Math.floor((arr.length + 1) / 2);
//   console.log(median);
//   let mode = modeFunc(arr);

//   console.log(mode);
// }

// function modeFunc(array) {
//   let arr;
//   for (let i = 0; i < array.length; i++) {
//     array.forEach((element) => {
//       if (array[i] === element) {
//         arr = element;
//         // console.log((arr = element));
//       }
//     });
//     // console.log((arr = array[i]));
//   }
//   return arr;
// }

// Find sum of two arrays.
// [3,5,2,9,4] = 3+5+2+9+4 = 23
// [6,2,8,1,3] = 6+2+8+1+3 = 20
// Final Output : 20+23 = 43
// console.log(sumOfTwoArr([1, 2, 3], [3, 2, 3]));
// function sumOfTwoArr(arr1, arr2) {
//   let fArr = arr1.reduce((prev, curr) => {
//     return prev + curr;
//   });
//   let sArr = arr2.reduce((prev, curr) => {
//     return prev + curr;
//   });
//   return fArr + sArr;
// }

//Find number of constants and vowels in a string.

// const findVowels = (str) => {
//   // Arrow function does not hoiest before calling function.
//   let newStr = str.split("");
//   let vowels = newStr.filter((vowel) => {
//     if (
//       vowel.includes("a") ||
//       vowel.includes("i") ||
//       vowel.includes("e") ||
//       vowel.includes("o") ||
//       vowel.includes("u")
//     ) {
//       return vowel;
//     }
//   });
//   let consonants = newStr.length - vowels.length;
//   return "vowels : " + vowels.length + " consonants : " + consonants;
// };
// console.log(findVowels("miheerea"));

// Shift an array by X to right.
// Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]
// console.log(arrayShift([1, 2, 3, 4, 5], 3));
// function arrayShift(arr, x) {
//   console.log(arr);
//   let last = 0;
//   //   let first = 0;
//   for (let i = 0; i < x; i++) {
//     last = arr.pop();
//     arr.unshift(last);
//   }
//   return arr;
// }
