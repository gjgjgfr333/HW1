// буду честен с этой задачей мне помог чат гпт, я не понимал как мне в отду строку записывать новые числа, он подсказал мне оператор +=
const multiplyTabe = function (number){
    if ( Number.isInteger(number) && number >=1){
        for (let i = 1; i <=number;i++){
            let str =''
            for(let j = 1; j <=number; j++){
                str += i * j + ' '
            }
            console.log(str)
        }
    }else{
        console.log('ВЫ ввели не целое число или отрицательное')
    }

}
multiplyTabe(5)

function calculateFactorial ( num){
    if (num >1){
        const arrayNum =[]
        for (let i =1; i <= num; i++){
            arrayNum.push(i)
        }
        return  arrayNum.reduce((accumulator,curentValue) =>accumulator * curentValue)
    }else{
        return 1
    }

}
console.log(calculateFactorial(5))
function addWithLoss (firstNum,secondNum,roundNumber){
    let sum = Math.round((firstNum+secondNum)*10) /10
    return Number(sum.toFixed(roundNumber || 1))
}
console.log(addWithLoss(0.5589,0.25786,2))

function prossesText (str){
    return str.trim().toLowerCase().replaceAll('a','x')
}
console.log(prossesText('     hello WORLDaaaaa    '))

function encode_string(str, key){
    let encode =''
    for (let i=0; i <str.length;i++){
        let strCode = str.charCodeAt(i)
        encode += String.fromCharCode(strCode +key)
    }
    return encode
}
console.log(encode_string('helloo, World ', 4))

function decode_string(encode_str, key){
    let decode =''
    for (let i=0; i <encode_str.length;i++){
        let strCode = encode_str.charCodeAt(i)
        decode += String.fromCharCode(strCode -key)
    }
    return decode
}
console.log(decode_string('lippss0$[svph$', 4))
// тут я спрашивалд гпт чат, потому что про метод CharcodeAt и String..... я не знал, после чего уже написал решение









