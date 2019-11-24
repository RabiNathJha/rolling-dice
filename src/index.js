import validator from './validator';

export function main(args){
    let params = args.slice(2);
    validator(params);
    
};