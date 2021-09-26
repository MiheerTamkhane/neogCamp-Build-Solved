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

function replaceArr(value1, value2, arr) {
  arr.forEach((ele) => {
    // console.log(ele);
    // arr.push(value2);
    // console.log(arr);
    if (ele === value1) {
    }
  });
}
console.log(replaceArr(5, 10, [1, 5, 3, 5, 6, 8]));
