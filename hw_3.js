function  getTimeOfDay (num){
    if (num >= 0 && num <=5){
        return 'ночь'
    }else if (num >5 && num <=16){
        return 'день'
    }else if (num >=17 && num <=24){
        return 'вечер'
    }else {
        return 'неправильно число'
    }
}
console.log(getTimeOfDay(37))