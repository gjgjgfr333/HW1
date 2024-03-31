import React, { useEffect, useState} from 'react';
import './MainComponentStyle.css'
import { useSelector} from 'react-redux';
import {getDays} from "../heal/getDays";
import {fetchWeatherData, processWeatherData} from "../api/getWeatherResult";




export const ForecastFiveDays = () => {
    const [formattedDates, setFormattedDates] = useState<string[]>([]);
    const [formattedTemperature, setFormattedTemperature] = useState<number[]>([]);
    const [formattedTemperatureFeels, setFormattedTemperatureFeels] = useState<number[]>([]);
    const [humidity, setHumidity] = useState<(string|undefined)[]>([]);
    const [formattedWeather, setFormattedWeather] = useState<(string|undefined)[]>([]);
    const latitude : string = useSelector((state : any ) => state.coordinates.lat);
    const longitude = useSelector((state : any ) => state.coordinates.lon);
    const cityNow = useSelector((state : any ) => state.coordinates.cityNow);

    useEffect(() => {
        if (latitude && longitude) {
            fetchWeatherData(latitude,longitude)
                .then(data => {
                    const {formattedDates,formattedTemperature,
                        formattedTemperatureFeels, humidity,
                        formattedWeather} = processWeatherData(data)
                    setFormattedTemperature(formattedTemperature);
                    setFormattedTemperatureFeels(formattedTemperatureFeels);
                    setHumidity(humidity);
                    setFormattedWeather(formattedWeather);
                    setFormattedDates(formattedDates);
                })
                .catch(error => console.error('Error fetching weather data:', error));
        }
    }, [latitude, longitude]);

    return (
        <>
            <div className={'card'}>
                <div>
                    <div className={'city'}>
                        {cityNow}
                        <div>сейчас</div>
                    </div>
                    <div className={'temperature_now'}>
                        {formattedTemperature[0]}°C
                    </div>
                    <div className={'feelsLike'}>
                        Ощущается как {formattedTemperatureFeels[0]}°C
                    </div>
                    <div className={'card_data'}>{formattedDates[0]}</div>
                </div>
                <div>
                    <div className={'icon'}></div>
                    <div className={'card_data'}>
                        {formattedWeather}
                    </div>
                </div>
            </div>
            <div className={'little_block'}>
                {formattedDates.slice(1).map((singleDate, index) => (
                    <div className={'littel_card'} key={index}>
                        <div className={'data_days'}>{getDays(singleDate)}</div>
                        <div className={'icon_2'}></div>
                        <div className={'temp_2'}>{formattedTemperature[index + 1]}°C</div>
                    </div>
                ))}
            </div>
        </>
    )
}



//
// //текущий прогноз
// const CurrentWeather = () => {
//     const latitude = useSelector(state => state.coordinates.lat);
//     const longitude = useSelector(state => state.coordinates.lon);
//     const [formattedDate, setFormattedDate] = useState('');
//     const [formattedTemperature, setFormattedTemperature] = useState(null)
//     const [formattedWeather, setFormattedWeather] = useState(null)
//     const [feel, setFeel] = useState(null)
//
//     useEffect(() => {
//         if (latitude && longitude) {
//             fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lang=ru&lon=${longitude}&appid=7e2ff37f25bf00f92d20d0c8c9e5b5e8`)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error(`Ошибка при получении данных: ${response.status} ${response.statusText}`);
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     console.log("Текущая погода", data);
//                     const date = new Date(data.dt * 1000);
//                     const options = { weekday: 'long', month: 'long', day: 'numeric' };
//                     const formattedDate = date.toLocaleDateString('ru-RU', options);
//                     const temperature = Math.round(data.main.temp - 273);
//                     const feels = Math.round(data.main.feels_like - 273);
//                     const weatherNow = data.weather[0].description;
//
//                     setFormattedDate(formattedDate);
//                     setFormattedTemperature(temperature);
//                     setFormattedWeather(weatherNow);
//                     setFeel(feels);
//                 })
//                 .catch(error => console.error('Ошибка при получении погодных данных:', error));
//         }
//     }, [latitude, longitude,]);
//
//     return (
//         <div className={'weatherNow'}>
//             <div className={'time'}>{formattedDate}</div>
//             <div className={'temp'}>{formattedTemperature}°</div>
//             <div className={'data__text'}>Ощущается как {feel}°. За окном: {formattedWeather}</div>
//         </div>
//     );
// };


// export {
//      ForecastFiveDays,
//     // AirPollutionFireWeather,CurrentWeather
// }