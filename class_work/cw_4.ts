function getMaxValue<T>(array: T[]): T {

    return array.reduce((acc,currentValue) =>{
        if( typeof acc === "object" && typeof currentValue === 'object'){
            return acc['value'] > currentValue['value'] ? acc : currentValue
        }else{
            return acc > currentValue ? acc : currentValue
        }
    })

}

const numbers = [5, 2, 8, 10];
const strings = ['apple', 'banana', 'orange'];
const objects = [{ value: 20 }, { value: 15 }, { value: 25 }];

console.log(getMaxValue(numbers))