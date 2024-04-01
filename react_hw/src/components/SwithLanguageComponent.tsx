import React from 'react';
import './SwithStyle.css';
import { useTranslation } from 'react-i18next';

const SwitchLanguageComponent = () => {
    const {i18n} = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className={`switch`} onClick={toggleLanguage}>
            <div className={`switch_round ${i18n.language === 'en' ? 'light' : 'dark'}`}></div>
        </div>
    );
}
    export default SwitchLanguageComponent;
