import React, {useState} from 'react';
import {
    ForecastFiveDays
} from "../../components/MainComponent";
import {useSelector} from "react-redux";
import SearchComponent from "../../components/SearchComponent";
import './MainStyle.css'
import AirPollutionFireWeather from "../../components/AirPollutionFireWeather";
import HumidityComponent from "../../components/HumidityComponent";
import SpeedWindComponent from "../../components/SpeedWindComponent";

const MainPages = () => {
    const cityNow = useSelector((state:any) => state.coordinates.cityNow);
    const [expandedCardIndex, setExpandedCardIndex] = useState<(number|null)>(0)
    const [humidity, setHumidity] = useState<(string|undefined)[]>([])
    const [wind, setWind] = useState<(string|undefined)[]>([])
    const handleCardClick = (index: number | null) => {
        if (index === expandedCardIndex){
            return
        }
        setExpandedCardIndex(index);
    };
    return (
            <div>
                <SearchComponent/>
                <section className={'main_section'}>
                    <h2>{cityNow}</h2>
                    <div className={'main_div'}>
                        <ForecastFiveDays expandedCardIndex={expandedCardIndex}
                                          setExpandedCardIndex={setExpandedCardIndex}
                                          handleCardClick={handleCardClick}
                                          humidity={humidity} setHumidity={setHumidity}
                                          wind={wind} setWind={setWind}/>

                    </div>
                    <div className={'infoBlock'}>
                        <AirPollutionFireWeather expandedCardIndex={expandedCardIndex}/>
                        <HumidityComponent humidity={humidity} expandedCardIndex={expandedCardIndex}/>
                        <SpeedWindComponent expandedCardIndex={expandedCardIndex} wind={wind}/>
                    </div>

                </section>
            </div>

    );
};

export default MainPages;