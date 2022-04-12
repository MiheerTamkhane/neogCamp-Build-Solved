// Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5
const arrayLen = (rest) => rest.length;
console.log(arrayLen([1, 2, 3, 4]));

// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
const indexOfarr = (arr, item) => arr.indexOf(item);
console.log(indexOfarr([1, 2, 3], 1));

// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]
const replaceArr = (arr, item, withItem) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr[i] = withItem;
    }
  }
  return arr;
};
console.log(replaceArr([1, 1, 1, 1, 2], 1, 5));

// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
const mergeArray = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeArray([1, 2, 3], [4, 5, 6]));

// Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c
const characterAt = (str, index) => str.charAt(index);
console.log(characterAt("Miheer", 5));

// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021
const minDate = (date1, date2) => {
  const dateOne = date1.split("/");
  const dateTwo = date2.split("/");

  if (
    dateOne[0] > dateTwo[0] ||
    dateOne[1] > dateTwo[1] ||
    dateOne[2] > dateTwo[2]
  ) {
    return `${date2} come before ${date1}`;
  } else {
    return `${date1} come before ${date2}`;
  }
};

console.log(minDate("02/05/2021", "24/01/2021"));
