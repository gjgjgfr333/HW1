import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAirPopulationResult, getNumberAirPopulation, prossesAirPopulation} from "../api/getAirPopulationResult";
import React from "react";
import {useTranslation} from "react-i18next";
import './infoCompanents.css'



const AirPollutionFireWeather = (props: any) => {
    const latitude = useSelector((state: any) => state.coordinates.lat);
    const longitude = useSelector((state: any) => state.coordinates.lon);
    const [air, setAir] = useState<(string | null)[]>([])
    const [numberAir, setNumberAir] = useState<(string | null)[]>([])

    const {t}= useTranslation()


    useEffect(() => {
        if (latitude && longitude) {
            getAirPopulationResult(latitude,longitude)
                .then((data) => {
                    setAir(prossesAirPopulation(data))
                    setNumberAir(getNumberAirPopulation(data))

                })
                .catch(error => {
                    console.error('Error ', error);
                });
        }
    }, [latitude, longitude]);

    return (
        <div className={'info'}>
            <h2>{t("Index")}</h2>
            <div className={'imgBlock'}>
                <div className={'img1'}></div>
                <div className={'numberInfo'}>{numberAir[props.expandedCardIndex]}</div>
            </div>
            <div className={'data__text'}>{air[props.expandedCardIndex]}</div>
        </div>
    );
}
export default AirPollutionFireWeather