#! /usr/bin/env node

import inquirer from "inquirer";
//intialize user balance and pin code
let myBalance = 10000; //Dollar
let myPin = 1234; 

// print welcome message
console.log("Welcome to programming - ATM MACHINE");

let pinAnswer = await inquirer.prompt([
    
{
    name :"pin",
    type:"number",
    message:"Enter your pin code:"

}
])
if (pinAnswer.pin === myPin){
    console.log("Pin is correct, login succesfully");
    //console.log('current account balance is ${myBalance}')

    let opertaionAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Amount","Check Balance"]

        }
    ])
    if(opertaionAns.operation === "Withdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name:"amount",
                type:"number",
                message:"Enter the Amount to Withdraw:"
            }
        ])
        if(amountAns.amount > myBalance){
            console.log("Insufficient Balance");
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Succesfully`);
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
    else if (opertaionAns.operation === "Check Balance")
        console.log(`your account balance is :${myBalance}`);
}
else{
    console.log("Pin is incorrect,Try again");
}