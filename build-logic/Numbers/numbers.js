// Write a program to input 2 numbers and display the sum of the numbers to the console.
// let num1 = 20;
// let num2 = 40;
// let sum = num1 + num2;
// console.log(sum);

// Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest
// const p = prompt("principal amount");
// const t = prompt("time in years");
// const r = prompt("rate");
// const SI = (p * t * r) / 100;
// console.log(SI);

//Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

// Formula : 0.5 * m * v * v
// const m = 2;
// const v = 3;
// const KE = 0.5 * m * v * v;
// console.log(KE);

// Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively
// const tempInFahr = 192;
// const tempInCels = ((tempInFahr - 32) * 5) / 9;
// console.log(tempInCels);

// Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

// Formula :

// Area: a*a

// Perimeter: 4*a

// Surface Area: 6*a*a

// Volume: a*a*a

// const a = 4;
// const area = a * a;
// console.log(area);
// const perimeter = 4 * a;
// console.log(perimeter);
// const surfaceArea = 6 * a * a;
// console.log(surfaceArea);
// const volume = a * a * a;
// console.log(volume);

// Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

// Input: CP = 1500, SP = 2000
// Output: 500 Profit

// Input: CP = 3125, SP = 1125
// Output: 2000 Loss

// const CP = 100;
// const SP = 100;

// if (CP > SP) {
//   const loss = CP - SP;
//   console.log(loss + " Loss");
// } else if (SP > CP) {
//   const profit = SP - CP;
//   console.log(profit + " Profit");
// } else {
//   console.log("No gains No lose");
// }

// Write a program to calculate sum of N natural digits, as input by the users?

// Enter a positive integer: 100
// Sum = 5050

// let num = 100;
// let sum = 0;
// for (let i = 0; i <= num; i++) {
//   sum += i;
// }
// console.log(sum);

// Write a JavaScript program to compute the sum of all digits that occur in a given string.
// Input: 1234
// Output: 1+2+3+4 = 10

// const num = 12345;
// let newNum = num.toString().split("");

// let sum = 0;
// for (let i = 0; i < newNum.length; i++) {
//   sum += Number(newNum[i]);
// }
// console.log(sum);

// Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

// Example-

// Enter a Number : 1234
// Enter the Number of Rotations : 2
// Output : 3412
