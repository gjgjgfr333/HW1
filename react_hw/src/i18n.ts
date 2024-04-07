import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import BackEnd from 'i18next-http-backend'
import LanguageDetector from "i18next-browser-languagedetector";
import {getLocalLang} from "./helper/getLocalLang";


i18n.
    use(BackEnd)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: getLocalLang(),
        debug: true,
        detection: {
            order: ['queryString', 'cookie'],
        },
        interpolation: {
            escapeValue: false
        }
    })


export default i18n;