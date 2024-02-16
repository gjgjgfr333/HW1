
function isPalindrome (str){
    let clearstr = str.replace(/[^a-zа-яё1234567890]/g, '')
    return clearstr === clearstr.split('').reverse().join('')
}
//console.log(isPalindrome('t4e4t!@$#%@'))

function getLongWord(str){
    let clearstr = str.replace(/[^a-zа-яё1234567890 ]/g, '').trim();
    const arrayWords = clearstr.split(' ');
    return arrayWords.reduce((theLongest, currentValue) => {
        return theLongest.length > currentValue.length ? theLongest : currentValue;
    });
}
//console.log(getLongWord('hello mem 354апварпр, апвап!'));


function getAlphabetOrder (str){
    const arrayNumber =[]
    let result =''
    for (let i =0; i< str.length;i ++){
        arrayNumber.push(str.charCodeAt(i))}
    arrayNumber.sort((a,b) => a-b)
    for (let i =0; i< arrayNumber.length;i ++){
        result += String.fromCharCode(arrayNumber[i])
    }
    return result
}
//console.log(getAlphabetOrder('adfsdgdrh'))

function getUnicSumbol (str) {
    for (let i = 0; i < str.length; i++){
        let uniqueStatus = true
        for(let j = 0; j <str.length; j++){
            if (i !== j && str[i]===str[j]){
                uniqueStatus = false
            }
        }
        if (uniqueStatus) return i
    }
    return 'нет уникального значения'
}
//console.log(getUnicSumbol('hheelloo'))

function getOnlyVowels(str){
    let vowels = str.toLowerCase().match(/[aeiouаеёиоуыэюя]/g)
    if (vowels === null){
        return 'нет совпадений'
    }else{
        return vowels.length
    }
}
//console.log(getOnlyVowels('aaaabb'))

//**

function getLongestSubstring (str){
    let result =''
    const arraySubstring =[]
    for (let i= 0; i <str.length; i++){
        for (let j = i; j< str.length; j++){
            if ( result.includes(str[j])){
                arraySubstring.push(result)
                result = ''
                break
            }
            else{
                result += str[j]
            }
        }
    }
    arraySubstring.push(result)
    console.log(arraySubstring)
    return arraySubstring.reduce((longWord,currentValue) =>{
        return longWord.length >currentValue.length ? longWord : currentValue
    })
}

console.log(getLongestSubstring('pwwkew  '))
