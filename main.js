#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 70,
    SGD: 1.5,
    PKR: 280,
};
let ans = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "Enter from Currency",
        choices: ["USD", "EUR", "GBP", "INR", "SGD", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter to Currency",
        choices: ["USD", "EUR", "GBP", "INR", "SGD", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter amount"
    }]);
let temp = ans.amount / currency[ans.from];
let out = temp * currency[ans.to];
console.log(`${ans.amount} ${ans.from} is equal to ${out} ${ans.to}`);
