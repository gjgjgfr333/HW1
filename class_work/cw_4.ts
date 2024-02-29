function getMaxValue<T>(array: T[]): T {

    return array.reduce((acc,currentValue) =>{
        if( typeof acc === "object" && typeof currentValue === 'object'){
            return acc['value'] > currentValue['value'] ? acc : currentValue
        }else{
            return acc > currentValue ? acc : currentValue
        }
    })

}

const numbe = [5, 7, 84, 17];
const string = ['apple', 'avokado', 'orange'];
const object = [{ value: 0 }, { value: 1 }, { value: 2 }];

console.log(getMaxValue(numbegit))