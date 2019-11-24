import prng from './prng';

export default (params) => {

    let operator = '';
    let currOutcome = 0;
    let overallOutcome = 0;
    let rollDiceLogs = [];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    for(let i=0; i<params.length; i++){
        if(i % 2 === 0){
            currOutcome = rollDices(parseReqInputs(params[i]));
            overallOutcome = (operator)? eval(`${overallOutcome} ${operator} ${currOutcome.sumOfOutcomes}`) : currOutcome.sumOfOutcomes;
            rollDiceLogs.push(currOutcome.arrayOfDiceOutcomes);
        }
        else {
            operator = params[i];
        }
    }

    return {
        result: Math.abs(overallOutcome),
        rollDiceLogs
    }
}


function rollDices({noOfDice, sidesOfDice}){
    let arrayOfDiceOutcomes = [];

    for(let i=0; i<noOfDice; i++){
        arrayOfDiceOutcomes.push(prng(1, sidesOfDice + 1));
    }

    return {
        arrayOfDiceOutcomes,
        sumOfOutcomes:getSumOfArrayElements(arrayOfDiceOutcomes)};
}

const parseReqInputs = (input) => {
    input = input.toUpperCase().split('D');

    return {
        noOfDice: Number(input[0]),
        sidesOfDice: Number(input[1])
    }
};

const getSumOfArrayElements = (array) => array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);