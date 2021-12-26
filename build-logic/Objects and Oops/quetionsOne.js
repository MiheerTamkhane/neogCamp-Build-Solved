const studentDetails = [
  {
    roll: "1",
    name: "Rohan Singh",
    maths: 86,
    science: 90,
    english: 75,
    computer: 85,
  },
  {
    roll: "2",
    name: "Ritvik Patel",
    maths: 27,
    science: 30,
    english: 35,
    computer: 30,
  },
  {
    roll: "3",
    name: "Neha Maurya",
    maths: 75,
    science: 69,
    english: 40,
    computer: 75,
  },
  {
    roll: "4",
    name: "Mohit Verma",
    maths: 21,
    science: 31,
    english: 45,
    computer: 40,
  },
  {
    roll: "5",
    name: "Karan Trivedi",
    maths: 70,
    science: 80,
    english: 35,
    computer: 60,
  },
];

// 1.Print the name and total marks of each student.
// studentDetails.map((ele) => {
//   console.log(
//     "name : " +
//       ele.name +
//       ", Total marks : " +
//       (ele.maths + ele.science + ele.english + ele.computer)
//   );
// });

// 2. Print the name of the student whose total marks are hightest.
// let totalMarks = studentDetails.map((student) => {
//   return student.maths + student.science + student.english + student.computer;
// });
// console.log(totalMarks);
// let maxMarks = Math.max(...totalMarks);
// console.log(maxMarks);
// let firstStudent = studentDetails.map((student) => {
//   let marks =
//     student.maths + student.science + student.english + student.computer;
//   console.log(marks);
//   if (marks === maxMarks) {
//     return student.name;
//   }
// });
// let winner = firstStudent.forEach((ele) => {
//   if (ele !== undefined) {
//     console.log("The 1Ranker is : " + ele + " With marks : " + maxMarks);
//   }
// });

// 3. Print the name of student whose total marks is lowes
// let totalMarks = studentDetails.map((student) => {
//   return student.maths + student.science + student.english + student.computer;
// });
// console.log(totalMarks);
// let maxMarks = Math.min(...totalMarks);
// console.log(maxMarks);
// let firstStudent = studentDetails.map((student) => {
//   let marks =
//     student.maths + student.science + student.english + student.computer;
//   console.log(marks);
//   if (marks === maxMarks) {
//     return student.name;
//   }
// });
// let winner = firstStudent.forEach((ele) => {
//   if (ele !== undefined) {
//     console.log("The last Ranker is : " + ele + " With marks : " + maxMarks);
//   }
// });

//4. Print the average marks of the class in computer subject.
// studentDetails.map((ele) => {
//   console.log(
//     "name : " +
//       ele.name +
//       ", Average : " +
//       (ele.maths + ele.science + ele.english + ele.computer) / 4
//   );
// });

// Print the grades of all students:
// Grade A if total marks is higher than or equal to 75%,
// Grade B if higher than or equal to 60%,
// Grade C if higher than or equal to 35%,
// Grade D if lower than 35%.
// studentDetails.map((ele) => {
//   let avg = (ele.maths + ele.science + ele.english + ele.computer) / 4;

//   if (avg >= 75) {
//     console.log(ele.name + " Grade : A");
//   } else if (avg >= 60 && avg < 75) {
//     console.log(ele.name + " Grade : B");
//   } else if (avg >= 35 && avg < 60) {
//     console.log(ele.name + " Grade : C");
//   } else if (avg >= 0 && avg < 35) {
//     console.log(ele.name + " Grade : D");
//   }
// });

// 6.Print the total number of students passed and their names. Pass when total marks is greater than 35%.
// let count = 0;
// studentDetails.map((ele) => {
//   let avg = (ele.maths + ele.science + ele.english + ele.computer) / 4;

//   if (avg >= 35) {
//     count++;
//     console.log(ele.name);
//   }
// });
// console.log(count);
