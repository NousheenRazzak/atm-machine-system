#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
console.log("Current balance: $" + myBalance);
let myPin = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Enter your Pin Code: "
});
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code :)");
    let operationAns = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: "Please select an option: ",
        choices: ["Withdraw cash", "Check balance"]
    });
    if (operationAns.operation === "Withdraw cash") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "Enter amount: "
        });
        let finalAmount = myBalance - amountAns.amount;
        console.log("Your remaining balance is $" + finalAmount);
    }
    else {
        console.log("Your current balance is: $10000");
    }
}
else {
    console.log("Incorrect Pin Code :(");
}
