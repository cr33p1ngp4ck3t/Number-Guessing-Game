#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.bold(`You got ${chalk.bgRed(5)} Attempts\n`))
const randInt:number = (Math.floor(Math.random()*10)+1)
for(let i=5;i>=1;i--){
    const guess = await inquirer.prompt([{message:"Enter a number Between 1-10: ",type:"number",name:"userInp"}])
    if (guess.userInp !== randInt){
            console.log(`==> ${chalk.bgBlue('Nope')} \n\tYou got ${chalk.bgRed(i-1+' Attempts')} left!!\n`)

        }
    else {console.log(chalk.bold(`==> You Guessed The ${chalk.bgGreen('Correct')} Number After ${chalk.bgRed(5-i +' Attempts!')}`))
    break
    }
    
}
