export const getDays = (str: string) => {
    let commaIndex = str.indexOf(',');
    let newStr = str.slice(0, commaIndex);
    switch (newStr) {
        case 'понедельник':
            return 'ПН';
        case 'вторник':
            return 'ВТ';
        case 'среда':
            return 'СР';
        case 'четверг':
            return 'ЧТ';
        case 'пятница':
            return 'ПТ';
        case 'суббота':
            return 'СБ';
        default:
            return 'ВС';
    }
}