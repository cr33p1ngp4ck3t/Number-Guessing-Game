#! /usr/bin/env node
import inquirer from "inquirer"
const guess = await inquirer.prompt([{message:"Enter a number Between 1-10: ",type:"number",name:"userInp"}])
const randInt:number = (Math.floor(Math.random()*10)+1)
if (guess.userInp=== randInt){
    console.log("==> You Guessed The Correct Number!")
}
else console.log(`==> Nope. The Correct Number is: ${randInt}`)