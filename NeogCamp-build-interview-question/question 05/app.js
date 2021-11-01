const readLineSync = require("readline-sync");
//created empty array to push the objects created by user
let marksList = [];
//function for counting marks of students
function countMarks(){
 const userName = readLineSync.question("Please enter name of student: ");
 const unitTestMarks = parseInt(readLineSync.question("Enter unit test marks : "));
const preFinalMarks = parseInt(readLineSync.question("Enter pre final exam marks : "));
const finalMarks = parseInt(readLineSync.question("Enter final exam marks : "))
//sum of all marks
let marks = unitTestMarks + preFinalMarks + finalMarks;
//pushing marks and name object to marksList array
marksList.push({marks, userName});
let average = marks / 3;
console.log("Average marks of student is: "+average);
console.log("Total marks of student is: "+marks);

}
//loop for function call
for(let i = 0 ; i < 5; i++){
     countMarks();
   }
   console.log(marksList)
   //store the max values of usermarks
let maxScorer = marksList.reduce((prev, current) => {

return (prev.marks > current.marks) ? prev : current;
   
});

console.log("High scorer is " + maxScorer.userName + " with score of " + maxScorer.marks);