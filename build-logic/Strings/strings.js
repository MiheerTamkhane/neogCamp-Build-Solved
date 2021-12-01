// Write a program that converts the string into uppercase
// var str = "neogCamp";
// console.log(str.toLocaleUpperCase());

// // Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood
// var str = "Good";
// var str2 = "morning" + str;
// console.log(str2);

// Program that reads string and count number of characters present in the string

// var str = "neoGcamp";
// console.log(str.length);

// Write a program that converts string like "124" to 124
// var str = "124";
// console.log(str.toString());

// Write a program to delete all vowels from a string. Assume string is not more than 80 characters long
// var str = "neoGcamp";
// var string = str.split("");
// if (str.length < 80) {
//   let newStr = string.map((item) => {
//     return item.replace(/[aeiou]/g, "");
//   });
//   console.log(newStr.join(""));
// } else {
//   console.log("String must have only 80 chars");
// }

// Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45
// const str = "miheervt@007";
// if (str.includes("@")) {
//   console.log("Its alpha numeric");
// } else {
//   console.log("Not a alpha numeric");
// }

// A program that reads three strings and prints the longest and smallest one
// let first = "hi";
// let second = "h";
// let third = "miheer";
// // console.log(first.length);
// if (first.length > second.length && first.length > third.length) {
//   console.log("first is greater");
// } else {
//   if (second.length > third.length) {
//     console.log("third is small");
//   } else {
//     console.log("second is small");
//   }
// }
// if (second.length > first.length && second.length > third.length) {
//   console.log("second is greater");
// } else {
//   if (first.length > third.length) {
//     console.log("third is small");
//   } else {
//     console.log("first is small");
//   }
// }
// if (third.length > first.length && third.length > second.length) {
//   console.log("third is greater");
// } else {
//   if (first.length > third.length) {
//     console.log("third is small");
//   } else {
//     console.log("first is small");
//   }
// }

//A program that counts number of vowels and consonants in a String?
// let count = 0;
// function countVowConso(str) {
//   let newString = str.toLowerCase().split("");
//   console.log(newString);

//   newString.forEach((element) => {
//     theVowels(element);
//   });
//   console.log(count);
//   console.log("Number vowels in string are : " + count);
//   console.log(
//     "Number consonants in string are : " + (newString.length - count)
//   );
// }
// function theVowels(el) {
//   let arr = "aeiou";
//   let array = arr.split("");
//   console.log(el);
//   console.log(array);
//   if (array.includes(el)) {
//     count++;
//   }
// }

// Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen();
// function strReturn(str) {
//   return str.length > 7;
// }
// console.log(strReturn("himynameis"));

//Write a program that takes two strings and copies smaller string into bigger string.

// function smallBig(str, str2) {
//   if (str.length > str2.length) {
//     console.log(str + str2);
//   } else {
//     console.log(str2 + str);
//   }
// }
// smallBig("hiMiheer", "Miheer");

//Given a string, determine if it is a palindrome, considering only alphanumeric characters

// function isPali(str) {
//   let string = str.split("").reverse().join("");
//   if (string === str) {
//     return "is Palindrome";
//   } else {
//     return "Is not palindrome";
//   }
// }
// console.log(isPali("naman"));

//For a given input string(str), write a function to print all the possible substrings.Without using substr method
// console.log(isSubstring(0, 6, "Miheer"));

// function isSubstring(startIndex, endIndex, str) {
//   var string = str.split("");
//   var newStr = [];
//   for (let i = startIndex; i < endIndex; i++) {
//     newStr += string[i];
//   }
//   return newStr.split(",").join("");
// }

// Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.

// console.log(timeFrame("Wed April 15, 7pm"));
// function timeFrame(str) {
//   let newStr = str.split(",");
//   return newStr[0];
// }

//Write a program that masks all but last four characters of the string "5565534276455423" to '#';

// console.log(maskOff("5565534276455423"));
// function maskOff(str) {
//   let lastFour = str.substr(-4);
//   //   return lastFour.length;
//   let firstNums = str.substr(0, str.length - lastFour.length);
//   //   console.log(firstNums);
//   return str.replace(firstNums, hashCreate(firstNums));
// }
// function hashCreate(firstNums) {
//   let arr = [];
//   for (let i = 0; i < firstNums.length; i++) {
//     arr += "#";
//   }
//   return arr;
// }

//Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case.

// console.log(firstCap("tic tac toe is a fun game"));
// function firstCap(str) {
//   let string = str.substr(0, 6);
//   let newStr = str.substr(6);
//   return string.toUpperCase() + newStr;
// }
