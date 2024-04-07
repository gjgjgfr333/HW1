import React, {useContext, useEffect} from 'react';
import {ThemeContext} from "../context/ThemeContext";
import './SwithStyle.css'
import {useTranslation} from "react-i18next";


const SwitchComponent = () => {
    const {t} = useTranslation()
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            isDarkMode ? 'dark': 'light'
        )
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');



    }, [isDarkMode]);


    return (
        <div className={'main_switch'}>
            <div className={'text'}>{t('theme')}</div>
            <div className={'switch'} onClick={toggleTheme}>
                <div className={`switch_round ${isDarkMode ? 'dark' : 'light'}`}></div>
            </div>
        </div>
    );
};

export default SwitchComponent;
