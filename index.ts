#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.bold(`You got ${chalk.red(5)} Attempts\n`))
const randInt:number = (Math.floor(Math.random()*10)+1)
for(let i=5;i>=1;i--){
    const guess = await inquirer.prompt([{message:"Guess a Number Between 1-10: ",type:"number",name:"userInp"}])
    if (guess.userInp !== randInt || (guess.userInp<0 && guess.userInp>10)){
            console.log(` > ${chalk.yellowBright('Wrong, Try Again!')} \n\tYou got ${chalk.red.bold(i-1+' Attempts')} left!!\n`)

        }
    else {console.log((`\n > You Guessed The ${chalk.green.bold('Correct')} Number After ${chalk.redBright.bold(6-i +' Attempts!')}`))
    break
    }
    
}
