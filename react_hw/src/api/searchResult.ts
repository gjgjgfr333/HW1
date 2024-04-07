import {setCoordinates} from "../redux/slice";

export const searchResult = (city: string, dispatch: any, i18n: any) => {
    const langParameter = i18n.language === 'en' ? 'en' : 'ru';
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&lang=ru&limit=${5}&appid=7e2ff37f25bf00f92d20d0c8c9e5b5e8`)
        .then(response => response.json())
        .then(data => {
            console.log('search',data);
            if (data && data.length > 0) {
                const lat = data[0].lat;
                const lon = data[0].lon;
                console.log('lat',lat)
                console.log('lon',lon)
                const cityNow = data[0]?.local_names?.[langParameter as keyof typeof data.local_names]
                    || data[0].name;
                dispatch(setCoordinates(lat, lon, cityNow));
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
};
