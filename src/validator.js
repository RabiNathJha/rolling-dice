import chalk from 'chalk';

export default (params) => {

    if (params.length > 1) {
        if (params.length % 2 !== 0) {
            for (let i = 1; i <= params.length; i++) {
                if (i % 2 === 0) {
                    validateOperator(params[i - 1]);
                } else {
                    validateDiceTurnFormat(params[i - 1].toUpperCase());
                }
            }
        } else {
            throwError(`Invalid argument passed: ${params.join(' ')}`);
        }
    } else {
        validateDiceTurnFormat(params[0].toUpperCase());
    }
}

function validateDiceTurnFormat(param) {

    param = param.split('D');

    if (param.length !== 2) {
        throwError(`Invalid argument ${param}: separate no of dice and sides of each dice by D or d`);
    }

    if (!isNaN(Number(param[0])) && !isNaN(Number(param[1]))) {
        if (param[0] === '0' || param[1] === '0') {
            throwError(`Invalid argument ${param.join('')}: number and sides of dice(first and third char) cannot be zero`)
        }
        if (!isValidSide(param[1])) {
            throwError(`${param[1]} sided dice are not supported \nsupported dice sides are 4,6,8,12 and 20`)
        }
        if (param[1] % 1 !== 0) {
            throwError(`Invalid argument ${param.join('')}: number of sides in dice should always be even(third char) ex: 2,4,6...`)
        }
    } else {
        throwError(`Invalid argument ${param.join('')}: first and third char should be number`);
    }

    return true;

}

function throwError(errorMsg) {
    console.log(chalk.red(`${errorMsg} \n`), chalk.blue('Example: \n 1. 4D6 \n 2. 4D6 + 3D24'));
    process.exit();
}

function validateOperator(param) {
    if (param === '+' || param === '-') {
        return true
    }
    throwError('Invalid operator: only + and - operator are allowed');
}

function isValidSide(diceSide) {
    return [4, 6, 8, 12, 20].includes(Number(diceSide));
}