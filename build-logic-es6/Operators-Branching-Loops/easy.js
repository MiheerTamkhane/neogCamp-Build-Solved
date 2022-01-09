console.log("Operators, Branching, Loops in ES6");

// 1.Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
const add = (num1, num2) => num1 + num2;

console.log(add(2, 3));
// 2.Write a program to take a number input from user and determine whether the number is odd or even.
const oddOrEven = (num) =>
  num % 2 === 0 ? `The ${num} is Even!` : `The ${num} is Odd!`;

console.log(oddOrEven(4));
// 3.Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
const maxAndMin = (num1, num2) =>
  num1 > num2
    ? `${num1} is Max and ${num2} is Min`
    : `${num2} is Max and ${num1} is Min`;
console.log(maxAndMin(22, 3));
// 4.Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
const maxOutOfThree = (num1, num2, num3) => {
  let max = 0;
  num1 > num2 ? (max = num1) : (max = num2);
  num3 > max ? (max = num3) : (max = max);
  return `The maximum out of three is ${max}`;
};
console.log(maxOutOfThree(2, 3, 11));
// 5.Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
const minOutOfThree = (num1, num2, num3) =>
  `The minimum out of three is ${Math.min(num1, num2, num3)}`;

console.log(minOutOfThree(2, 1, 11));
// 6.Write program to take a month as an input from the user and find out whether the month has 31 days or not

const monthHas31Days = (month) => {
  let date = new Date(`${month} 31 2022`);
  return date.getDate() == 31
    ? `${month} has 31 days!`
    : `${month} has not 31 days!`;
};
console.log(monthHas31Days("feb"));
