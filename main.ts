#! /usr/bin/env node

import inquirer from "inquirer";

const currencies  : any = {
    USD : 1,
    EUR : 0.91,
    GBR : 0.76,
    INR : 74.57,
    PKR : 280
};

let user_input : any = await inquirer.prompt(
  [  {
    name : "inputCurrency",
    message : "Currency that convert",
    type : "list",
    chioces : ['USD','EUR','GBR','INR','PKR']

     },
     
     {
        name : "outputCurrency",
        message : "Currency in convert",
        type : "list",
        chioces : ['USD','EUR','GBR','INR','PKR']
     },

     {
        name : "amount",
        message : "Kindly enter the amount for convert.",
        type : "number",
     }
  ]
);


let inputAmount = currencies[user_input.inputCurrency];

let outputAmount = currencies[user_input.outputCurrency];

let userAmount = user_input.amount;

let baseAmount = userAmount / inputAmount;   //Based Currency is USD.

let convertedAmount = baseAmount * outputAmount;

//console.log(inputAmount);
//console.log(outputAmount);
//console.log(userAmount);
console.log(convertedAmount);