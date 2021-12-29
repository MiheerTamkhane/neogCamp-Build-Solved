// Salary calculation using OOPS concept.

// Create a Class using ES6 in JavaScript named Employee and assign necessary
class Employee {
  constructor(name, id, salary, hra, allowances) {
    this.name = name;
    this.id = id;
    this.salary = salary;
    this.hra = hra;
    this.allowances = allowances;
  }
  getSalary() {
    return this.salary * 12;
  }
}
const employee1 = new Employee("sarang", 1, 100000, 7000, 10000);
console.log(
  "name : " +
    employee1.name +
    " id : " +
    employee1.id +
    " salary : " +
    employee1.salary +
    " HRA : " +
    employee1.hra +
    " allowances : " +
    employee1.allowances +
    " net salary : " +
    employee1.getSalary()
);
const employee2 = new Employee("miheer", 2, 120000, 5000, 12000);
console.log(
  "name : " +
    employee2.name +
    " id : " +
    employee2.id +
    " salary : " +
    employee2.salary +
    " HRA : " +
    employee2.hra +
    " allowances : " +
    employee2.allowances
);

// data members and methods such as name, id, basic salary, HRA, Allowances; define getSalary method which will return the net salary.

// Create two Instances of Employee with all necessary details.

// Call the getSalary method of each instance and return the net salary based on your computation.
console.log(" net salary : " + employee1.getSalary());
console.log(" net salary : " + employee2.getSalary());
