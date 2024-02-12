function  getTimeOfDay (num){
    if (num >= 0 && num <=5){
        return 'ночь'
    }else if (num >=13 && num <=16){
        return 'день'
    }else if (num >=17 && num <=24){
        return 'вечер'
    }else if (num >5 && num <=12){
        return 'утро'
    }
    else {
        return 'неправильно число'
    }
}
console.log(getTimeOfDay(13
))
// лучше наверное переписать под swith case

for (let i=1; i<11;i++){
    //console.log(i)
}
for (let i=1; i<11;i++){
    if(i===7){
        break
    }
    //console.log(i)
}

let number = 1;

while (number <= 20) {
    if (number % 2 === 0 && number % 5 !== 0) {
        console.log(number);
    }
    number++;
}