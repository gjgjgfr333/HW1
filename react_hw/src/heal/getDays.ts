import i18n from "i18next";

export const getDays = (str: string, i18n: any) => {
    let commaIndex = str.indexOf(',');
    let newStr = str.slice(0, commaIndex);
    switch (newStr) {
        case 'понедельник':
        case 'Monday':
            return i18n.t('Monday');
        case 'вторник':
        case 'Tuesday':
            return i18n.t('Tuesday');
        case 'среда':
        case 'Wednesday':
            return i18n.t('Wednesday');
        case 'четверг':
        case 'Thursday':
            return i18n.t('Thursday');
        case 'пятница':
        case 'Friday':
            return i18n.t('Friday');
        case 'суббота':
        case 'Saturday':
            return i18n.t('Saturday');
        case 'воскресенье':
        case 'Sunday':
            return i18n.t('Sunday');
        default:
            return '';
    }
};
