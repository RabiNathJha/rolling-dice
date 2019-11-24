import chiSquaredTest from 'chi-squared-test';
import prng from '../prng';

describe('Testing PRNG randomness using chi-squared-test', () => {
    it('Should return true when chiSquaredTest probability is less than 0.01', () => {
        const min = 1;
        const max = 20;

        const expected = Array(200).fill(0).map(() => prng(min, max));

        const observed = Array(200).fill(0).map(() => prng(min, max));

        const reduction = 1;

        const {probability} = chiSquaredTest(observed, expected, reduction);
        
        expect(probability < 0.01).toEqual(true);
        
    })
})