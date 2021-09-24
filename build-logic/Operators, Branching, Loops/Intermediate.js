//Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
// for (let i = 1; i <= 100; i++) {
//   if (i % 15 == 0) {
//     console.log("fizzbuzz");
//   } else if (i % 5 == 0) {
//     console.log("bizz");
//   } else if (i % 3 == 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }

//Print the following star pattern :-
// *
// * *
// * * *
// * * * *
// * * * * *
// let string = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//Write a program to take a number input from user and print multiplication table 12 times for that number

// let num = 2;
// for (let i = 1; i <= 12; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(j * num);
//   }
// }

//Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

// function Fibonacci(num) {
//   let num1 = 0;
//   let num2 = 1;
//   let nextNum;
//   for (let i = 0; i < num; i++) {
//     console.log(num1);
//     nextNum = num1 + num2;
//     num1 = num2;
//     num2 = nextNum;
//   }
// }
// Fibonacci(100);

// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120.
// let fact = 1;
// function factorial(x) {
//   for (let i = 1; i <= x; i++) {
//     fact *= i;
//   }
//   return fact;
// }
// console.log(factorial(6));

//Write a Program to take a number input from user and find if the number is Prime or not

// function isPrime(x) {
//   if (x === 2) {
//     console.log("Prime");
//   } else if (x % 2 === 0) {
//     console.log("not prime");
//   } else {
//     console.log("Prime");
//   }
// }
// isPrime(61);

//Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

// function weekendOrWeekday(day) {
//   if (
//     day.toLowerCase() === "monday" ||
//     day.toLowerCase() === "tuesday" ||
//     day.toLowerCase() === "wednesday" ||
//     day.toLowerCase() === "thursday" ||
//     day.toLowerCase() === "friday"
//   ) {
//     console.log(day + " is Weekday.");
//   } else {
//     console.log(day + " is Weekend.");
//   }
// }

// weekendOrWeekday("monday");
