import {setCoordinates} from "../redux/slice";

export const getSearchResult = (city: string, dispatch: any) => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&lang=ru&limit=${1}&appid=7e2ff37f25bf00f92d20d0c8c9e5b5e8`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const lat = data[0].lat;
                const lon = data[0].lon;
                const cityNow = data[0].local_names.ru;
                dispatch(setCoordinates(lat, lon, cityNow));
            }

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
 }