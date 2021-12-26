// Find the sum of two matrix.
// console.log(
//   sumOfMatrix(
//     [
//       [1, 2],
//       [3, 4],
//     ],
//     [
//       [7, 6],
//       [7, 8],
//     ]
//   )
// );
// function sumOfMatrix(mtrx1, mtrx2) {
//   let sumArr = [[], []];
//   for (let i = 0; i < mtrx1.length; i++) {
//     for (let j = 0; j < mtrx1.length; j++) {
//       //   console.log(mtrx1[i][j] + mtrx2[i][j]);
//       //   sumArr += mtrx1[i][j] + mtrx2[i][j];
//       sumArr[i].push(mtrx1[i][j] + mtrx2[i][j]);
//     }
//   }
//   return sumArr;
// }

// Display transpose of matrix. Explaination
// console.log(
//   transposeOfMatrix([
//     [1, 4],
//     [5, 8],
//   ])
// );
// function transposeOfMatrix(arr) {
//   let TofArr = [[], []];
//   //   console.log(arr[0][1]);
//   let last = arr[0].pop(); // 4
//   let first = arr[1].shift(); // 5
//   console.log(last);
//   console.log(first);
//   arr[0].push(first);
//   arr[1].unshift(last);
//   return arr;
// }

let mat = [
  [1, 2],
  [2, 3],
];
let mat2 = [
  [1, 2],
  [2, 3],
];
// console.log(mat[0][0] === mat2[0][0]);
console.log(
  findIdentityMatrix(
    [
      [4, 7],
      [-1, 3],
    ],
    [
      [1, 0],
      [0, 1],
    ]
  )
);
function findIdentityMatrix(matrix, identity) {
  let multiArr = [[], []];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      //   console.log(matrix[i][j] + identity[i][j]);
      //   sumArr += matrix[i][j] + identity[i][j];
      multiArr[i].push(matrix[i][j] * identity[i][j]);
    }
  }
  return multiArr;
}
