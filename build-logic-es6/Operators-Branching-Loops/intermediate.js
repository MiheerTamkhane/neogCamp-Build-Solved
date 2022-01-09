console.log("Operators, Branching, Loops in ES6");

//1.Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

const fizzBuzz = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    i % 15 == 0
      ? arr.push("FizzBuzz")
      : i % 5 == 0
      ? arr.push("Buzz")
      : i % 3 == 0
      ? arr.push("Fizz")
      : arr.push(i);
  }
  return arr;
};
console.log(fizzBuzz(15));

// 3. Print the following star pattern :-
// *
// * *
// * * *
// * * * *
// * * * * *
const starPattern = (n) => {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
};
console.log(starPattern(5));

// 4.Write a program to take a number input from user and print multiplication table 12 times for that number.
// const multiplicationTableFor12Times = (num) => {
//   for (let i = 1; i <= 12; i++) {
//     for (let j = 1; j <= 10; j++) {
//       console.log(num * j);
//     }
//   }
// };
// multiplicationTableFor12Times(2);

// 5. Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
const fibonacci = (n) => {
  let a = 0;
  let b = 1;
  let nextTerm;
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += `${a} `;
    nextTerm = a + b;
    a = b;
    b = nextTerm;
  }
  return str;
};
console.log(fibonacci(10));
// 6. Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

// 7. Write a Program to take a number input from user and find if the number is Prime or not.

// 8. Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
