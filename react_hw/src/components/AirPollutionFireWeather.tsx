import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAirPopulationResult, prossesAirPopulation} from "../api/getAirPopulationResult";
import React from "react";


const AirPollutionFireWeather = () => {
    const latitude = useSelector((state: any) => state.coordinates.lat);
    const longitude = useSelector((state: any) => state.coordinates.lon);
    const [air, setAir] = useState<(string | null)[]>([])

    useEffect(() => {
        if (latitude && longitude) {
            getAirPopulationResult(latitude,longitude)
                .then(data => {
                    setAir(prossesAirPopulation(data))
                    console.log(prossesAirPopulation(data))
                })
                .catch(error => {
                    console.error('Error ', error);
                });
        }
    }, [latitude, longitude]);

    return (
        <div className={'data_main'}>
            <h2>Прогноз загрязнения воздуха на 4 дня</h2>
            {air.map((date, index) => (
                <div className={'data'} key={index}>
                    <div className={'data__text'}>{date}</div>
                    <div className={'data__text'}>загрязнение {air[index]}</div>
                </div>
            ))}
        </div>
    );
}
export default AirPollutionFireWeather