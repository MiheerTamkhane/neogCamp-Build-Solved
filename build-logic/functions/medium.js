// Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5
// function lengthOfArr(...arr) {
//   return arr.length;
// }
// console.log(lengthOfArr(2, 3, 5, 6, 7));

//Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
// function indexOf(index, ...arr) {
//   return arr[index];
// }
// console.log(indexOf(3, 1, 2, 3, 4, 5));

// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

// function replaceArr(value1, value2, arr) {
//   let empty = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value1) {
//       empty += arr[i];
//       // console.log(empty.length);
//       arr.splice(i, empty.length, value2);
//     }
//   }
//   return arr;
// }
// console.log(replaceArr(5, 10, [1, 5, 3, 5, 6, 8]));

//Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

// function mergeArray(a, b) {
//   return [...a, ...b];
// }
// console.log(mergeArray([1, 3, 5], [2, 4, 6]));

// Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c

// function charAt(str, index) {
//   return str.slice(index, index + 1);
// }
// console.log(charAt("neoGcamp", 4));

// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

// function minDate(date1, date2) {
//   console.log(date1.split("/"));
//   const dateArr1 = date1.split("/");
//   console.log(date2.split("/"));
//   const dateArr2 = date2.split("/");

//   if (
//     dateArr1[0] > dateArr2[0] ||
//     dateArr1[1] > dateArr2[1] ||
//     dateArr1[2] > dateArr2[2]
//   ) {
//     return date2;
//   } else {
//     return date1;
//   }
// }

// console.log(minDate("02/05/2021", "24/01/2021"));
