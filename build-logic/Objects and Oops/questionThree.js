// Bank Account (Object Oriented Programming in JavaScript)

// Create a class and define data members such as name, bank account number,account balance, account type, ifsc and name it as BankAccount.
class BankAccount {
  constructor(name, bankAccNo, accBal, accType, ifsc) {
    this.name = name;
    this.bankAccNo = bankAccNo;
    this.accBal = accBal;
    this.accType = accType;
    this.ifsc = ifsc;
  }
}
// Create three Instances(three customers) of BankAccount with all necessary details.
const customer1 = new BankAccount(
  "sarang",
  12345,
  120000,
  "savings",
  "UBIN5965"
);
const customer2 = new BankAccount(
  "miheer",
  12534,
  140000,
  "current",
  "SBI5965"
);
const customer3 = new BankAccount(
  "sandy",
  34512,
  160000,
  "savings",
  "ICIC5965"
);
// Print the name of customers and their account balances.
console.log("Name : " + customer1.name + "Balance : " + customer1.accBal);
console.log("Name : " + customer2.name + "Balance : " + customer2.accBal);
console.log("Name : " + customer3.name + "Balance : " + customer3.accBal);
// Calculate the average account balance from all the instances.
console.log(
  "Average : " + (customer1.accBal + customer2.accBal + customer3.accBal) / 3
);
