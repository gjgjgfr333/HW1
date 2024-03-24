import React from 'react';
import {
    MainComponent,
    ForecastFiveDays,
    // AirPollutionFireWeather,
    // CurrentWeather,
} from "../../components/main_component";
import {useSelector} from "react-redux";

const Main = () => {
    const latitude = useSelector(state => state.coordinates.lat);
    const longitude = useSelector(state => state.coordinates.lon);
    const cityNow = useSelector(state => state.coordinates.cityNow)
    return (
        <div>
            <MainComponent/>
            <section className={'main_section'}>
                <h2>{cityNow}</h2>
                <div className={'main_div'}>
                    <ForecastFiveDays value ={`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lang=ru&lon=${longitude}&appid=7e2ff37f25bf00f92d20d0c8c9e5b5e8`}/>
                    {/*<AirPollutionFireWeather srs={'air'} title={"Уровень загрязнения воздуха"} value ={`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=7e2ff37f25bf00f92d20d0c8c9e5b5e8`}/>*/}
                </div>
                {/*<CurrentWeather/>*/}

            </section>


        </div>
    );
};

export default Main;