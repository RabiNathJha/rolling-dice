import validator from './validator';
import diceRoller from './diceRoller';

export function main(args){
    let params = args.slice(2);
    
    validator(params);

    const outcomes = diceRoller(params);

    console.log(outcomes);
    
};