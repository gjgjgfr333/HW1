import React from 'react';
import {useTranslation} from "react-i18next";
import './infoCompanents.css'
const SpeedWindComponent = (props: any) => {
    const {t} = useTranslation()
    return (
        <div className={'info'}>
            <h2>{t('wind')}</h2>
            <div className={'imgBlock'}>
                <div className={'img3'}></div>
                {/*<img src={'../../public/images/Frame1.png'} alt={'битая'}/>*/}
                <div className={'numberInfo'}>{props.wind[props.expandedCardIndex]}м/с</div>
            </div>
        </div>
    );
};

export default SpeedWindComponent;