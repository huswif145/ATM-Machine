#!usr/bin/env node
import inquirer from "inquirer";

async function main() {
  let user = await inquirer.prompt([
    {
      type: "input",
      name: "cardholder",
      message: "Welcome Rimsha Ather",
    },
    {
      type: "number",
      name: "pinCode",
      message: "Enter your 4 digit pinCode",
    },
    {
      type: "list",
      name: "accountType",
      message: "Select your account type",
      choices: ["current", "saving"],
    },
    {
      type: "list",
      name: "transactionType",
      message: "Select your transaction type",
      choices: ["cash", "withdrawal"],
    },
    {
      type: "list",
      name: "amount",
      message: "Select your amount",
      choices: ["1000", "2000", "5000", "10000"],
      when: (user) => user.transactionType === "cash",
    },
    {
      type: "number",
      name: "amount",
      message: "Enter your amount",
      when: (user) => user.transactionType === "withdrawal",
    },
  ]);

  if (String(user.pinCode).length === 4) {
    const balance = Math.floor(Math.random() * 10000 + 1);
    console.log(`Your balance is: ${balance}`);
    const enterAmount = Number(user.amount); // Ensure amount is a number

    if (enterAmount <= balance) {
      const remaining = balance - enterAmount;
      console.log(`You have withdrawn rupees ${enterAmount} and you have a remaining balance of ${remaining}`);
    } else {
      console.log("Insufficient balance.");
    }
  } else {
    console.log("Invalid pin code. Please enter a 4 digit pin code.");
  }
}

main();