import React, { useEffect, useState} from 'react';
import '../themeCss/colors.css'
import { useSelector} from 'react-redux';



interface WeatherItem {
    dt: number;
}
export const ForecastFiveDays = () => {
    const [formattedDates, setFormattedDates] = useState<string[]>([]);
    const [formattedTemperature, setFormattedTemperature] = useState<number[]>([]);
    const [formattedTemperatureFeels, setFormattedTemperatureFeels] = useState<number[]>([]);
    const [humidity, setHumidity] = useState<(string|undefined)[]>([]);
    const [formattedWeather, setFormattedWeather] = useState<(string|undefined)[]>([]);
    const latitude : string = useSelector((state : any ) => state.coordinates.lat);
    const longitude = useSelector((state : any ) => state.coordinates.lon);
    const cityNow = useSelector((state : any ) => state.coordinates.cityNow);



    const days = (str: string) => {
        let commaIndex = str.indexOf(',');
        let newStr = str.slice(0, commaIndex);
        switch (newStr) {
            case 'понедельник':
                return 'ПН';
            case 'вторник':
                return 'ВТ';
            case 'среда':
                return 'СР';
            case 'четверг':
                return 'ЧТ';
            case 'пятница':
                return 'ПТ';
            case 'суббота':
                return 'СБ';
            default:
                return 'ВС';
        }
    }

    useEffect(() => {
        if (latitude && longitude) {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lang=ru&lon=${longitude}&appid=7e2ff37f25bf00f92d20d0c8c9e5b5e8`)
                .then(response => response.json())
                .then(data  => {
                    console.log('fiveday', data)
                    const newDates = data.list
                        .filter((item : WeatherItem,index: number ) => index % 8 === 0)
                        .map((item: { dt: number; }) => {
                            const date = new Date(item?.dt * 1000)
                            const options : Intl.DateTimeFormatOptions = {weekday: 'long', month: 'long', day: 'numeric'};
                            return date.toLocaleDateString('ru-RU', options);
                        });

                    const extractData = (dataArray: string[], propertyPath : string) => {
                        return dataArray
                            .filter((item, index) => index % 8 === 0)
                            .map(item => {
                                const pathParts = propertyPath.split('.');
                                let value : string | undefined = item;
                                for (const part of pathParts) {
                                    if (value && typeof value === 'object') {
                                        value = value[part];
                                    } else {
                                        value = undefined;
                                        break;
                                    }
                                }
                                return value;
                            });
                    };

                    const newTemperature: number[] = extractData(data.list, 'main.temp')
                        .map((temp: string | undefined) => {
                            if (temp === undefined) {
                                return 0;
                            }
                            return Math.round(+temp - 273);
                        });
                    const newTemperatureFeels: number[] = extractData(data.list, 'main.feels_like')
                        .map((temp: string | undefined) => {
                            if (temp === undefined) {
                                return 0;
                            }
                            return Math.round(+temp - 273);
                        });
                    const newHumidity:(string | undefined)[] = extractData(data.list, 'main.humidity');
                    const newWeather = extractData(data.list[0].weather, 'description');

                    setFormattedTemperature(newTemperature);
                    setFormattedTemperatureFeels(newTemperatureFeels);
                    setHumidity(newHumidity);
                    setFormattedWeather(newWeather);
                    setFormattedDates(newDates);

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
                        <div className={'data_days'}>{days(singleDate)}</div>
                        <div className={'icon_2'}></div>
                        <div className={'temp_2'}>{formattedTemperature[index + 1]}°C</div>
                    </div>
                ))}
            </div>
        </>
    )
}


// const AirPollutionFireWeather = (props) => {
//     const latitude = useSelector(state => state.coordinates.lat);
//     const longitude = useSelector(state => state.coordinates.lon);
//     const [date, setDate] = useState([])
//     const [air, setAir] = useState([])
//
//     useEffect(() => {
//         if (latitude && longitude) {
//             fetch(props.value)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Api по загрязнению воздуха не смогло подключиться');
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     console.log('воздух',data)
//                     const arrayDate = data.list
//                         .filter((item, index) => index % 24 === 0)
//                         .map(item => {
//                             const date = new Date(item?.dt * 1000)
//                             const options = {weekday: 'long', month: 'long', day: 'numeric'};
//                             return date.toLocaleDateString('ru-RU', options);
//                         });
//                     const arrayAir = data.list
//                         .filter((item,index) => index %24 ===0)
//                         .map(item =>{
//                             switch (item.main?.aqi ){
//                                 case 1:
//                                     return `очень низкий`
//                                 case 2:
//                                     return `низкий`
//                                 case 3:
//                                     return `средний`
//                                 case 4:
//                                     return `высокий`
//                                 case 5:
//                                     return `очень высокий`
//                                 default:
//                                     return null
//                             }
//                         })
//                     setAir(arrayAir)
//                     setDate(arrayDate)
//                 })
//                 .catch(error => {
//                     console.error('Error ', error);
//                 });
//         }
//     }, [latitude, longitude, props.srs,props.value]);
//
//     return (
//         <div className={'data_main'}>
//             <h2>Прогноз загрязнения воздуха на 4 дня</h2>
//             {date.map((date, index) => (
//                 <div className={'data'} key={index}>
//                     <div className={'data__text'}>{date}</div>
//                     <div className={'data__text'}>{props.title}: {air[index]}</div>
//                 </div>
//             ))}
//         </div>
//     );
// }
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