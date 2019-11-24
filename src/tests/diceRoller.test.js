import chiSquaredTest from 'chi-squared-test';
import prng from '../prng';

describe('Testing dice roller randomness', () => {
    it('testing randomness', () => {
        const min = 1;
        const max = 20;

        const expected = Array(200).fill(0).map(() => prng(min, max));

        const observed = Array(200).fill(0).map(() => prng(min, max));

        const reduction = 1;

        const {probability} = chiSquaredTest(observed, expected, reduction);
        
        expect(probability < 0.01).toEqual(true);
        
    })
})