import {extractData} from "../helper/extractData";
import {processTemperature} from "../helper/tempData";
export interface WeatherItem {
    dt: number;
}



export interface WeatherItem {
    dt: number;
}

export const fetchWeatherData = async (latitude: string, longitude: string, i18n: any) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lang=${i18n.language}&lon=${longitude}&appid=7e2ff37f25bf00f92d20d0c8c9e5b5e8`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

export const processWeatherData = (data: any, language: string, i18n: any) => {
    const newDates = data.list
        .filter((item: WeatherItem, index: number) => index % 8 === 0)
        .map((item: { dt: number; }) => {
            const date = new Date(item?.dt * 1000)
            const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
            return date.toLocaleDateString(language, options);
        });


    const newTemperature: number[] = extractData(data.list, 'main.temp')
        .map(processTemperature);
    const newTemperatureFeels: number[] = extractData(data.list, 'main.feels_like')
        .map(processTemperature);
    const newHumidity:(string | undefined)[] = extractData(data.list, 'main.humidity');
    // const newWeather = extractData(data.list.weather, 'description');
    const newWeather = data.list.filter((item: WeatherItem, index: number) => index % 8 === 0)
        .map((item : any)=> item.weather[0].description);
    const newIcon = data.list.filter((item: WeatherItem, index: number) => index % 8 === 0)
        .map((item : any)=> item.weather[0].icon);
    const newWind = extractData(data.list, 'wind.speed')

    return {
        formattedDates: newDates,
        formattedWeather: newWeather,
        formattedTemperature: newTemperature,
        formattedTemperatureFeels: newTemperatureFeels,
        humidity: newHumidity,
        wind: newWind,
        icon: newIcon
    };
};


