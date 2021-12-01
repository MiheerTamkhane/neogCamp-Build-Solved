// Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string

// function replaceStr(str, c1, c2) {
//   let newStr = str.split("");
//   console.log(newStr);

//   for (let i = 0; i < newStr.length; i++) {
//     // console.log(newStr[i]);
//     let count = 0;
//     if (newStr[i] === c1) {
//       count++;
//       console.log(newStr[i]);
//       console.log(i);
//       newStr.splice(i, count, c2);
//       //   newStr.splice();
//       //   count++;
//       //   newStr.remove();
//     }
//   }

//   return newStr.join("");
//   //   return count;
//   //   return str.replace(c1, c2);
// }
// console.log(replaceStr("Miheer", "e", "a"));

//Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word

// console.log(removeSpaces("I am the batman lover!"));
// function removeSpaces(str) {
//   return str.split(" ").join("");
// }

//Reverse the given string word wise. That is, the last word in given string should come at 1st place, last second word at 2nd place and so on. Individual words should remain as it is. example: Input : Welcome to NeoG Camp → Camp NeoG to Welcome

// console.log(reverseWordString("Welcome to NeoG Camp"));
// function reverseWordString(str) {
//   return str.split(" ").reverse().join(" ");
// }

// A program that counts the value of each character and prints the most repeated character?
// console.log(mostRepeatedChars("Miheeeeerrrr"));
// function mostRepeatedChars(str) {
//   var max = 0,
//     maxChar = "",
//     count = 0;
//   str.split("").forEach(function (char) {
//     // console.log(str.split(char));
//     if (str.split(char).length > max) {
//       //   console.log(max);

//       max = str.split(char).length;
//       count = max;
//       maxChar = char;
//     }
//   });
//   return count + " Times " + maxChar;
// }

//Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )

// console.log(toggleCase("neogcamp"));
// function toggleCase(str) {
//   let newStr = str.split("");
//   var string = "";
//   console.log(newStr);
//   for (let i = 0; i < newStr.length; i++) {
//     if (i % 2 !== 0) {
//       console.log(newStr[i].toUpperCase());
//       string += newStr[i].toUpperCase();
//     } else {
//       console.log(newStr[i].toLowerCase());
//       string += newStr[i].toLowerCase();
//     }
//   }
//   return string;
// }

//Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence. ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")

// console.log(removeWord("programming camp are amazing", "camp"));
// function removeWord(str, word) {
//   return str.replace(word, "");
// }
