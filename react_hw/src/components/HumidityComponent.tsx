import React from 'react';
import {useTranslation} from "react-i18next";
import './infoCompanents.css'

const HumidityComponent = (props:any) => {
    const {t}= useTranslation()
    return (
        <div className={'info'}>
            <h2>{t('humidity')}</h2>
            <div className={'imgBlock'}>
                <div className={'img2'}></div>
                <div className={'numberInfo'}>{props.humidity[props.expandedCardIndex]}%</div>
            </div>
        </div>
    );
};

export default HumidityComponent;