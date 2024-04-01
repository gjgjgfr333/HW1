import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import BackEnd from 'i18next-http-backend'
import LanguageDetector from "i18next-browser-languagedetector";

// import translationEn from './locales/en/translation.json';
// import translationRu from './locales/ru/translation.json';

// const resources = {
//     en: {
//         translation: translationEn,
//     },
//     fr: {
//         translation: translationRu,
//     },
//     // Add other languages here
// };
// i18n
//     .use(initReactI18next)
//     .init({
//         resources,
//         lng: 'ru',
//         interpolation: {
//             escapeValue: false,
//         },
//     });
i18n.
    use(BackEnd)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['queryString', 'cookie'],
        },
        interpolation: {
            escapeValue: false
        }
    })


export default i18n;