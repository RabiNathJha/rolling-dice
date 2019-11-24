import chalk from 'chalk';
import validator from './validator';
import diceRoller from './diceRoller';

export function main(args){
    let params = args.slice(2);
    
    validator(params);

    const outcomes = diceRoller(params);

    print(outcomes);
    
};

const print = (outcomes) => {
    outcomes.rollDiceLogs.forEach((diceRoll, index) => {
        console.log(`${chalk.bold.blue(`Dice ${index+1}:`)} ${chalk.bold.yellow(diceRoll)}`);
    });

    console.log(`${chalk.bold.green('\nResult: ')} ${chalk.bgGreen.bold.red(` ${outcomes.result} \n`)}`)
}