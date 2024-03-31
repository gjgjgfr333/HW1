import {setCoordinates} from "../redux/slice";
interface GeoData {
    lat: string;
    lon: string;
    local_names?: { ru: string };
    name: string;
}
interface SearchResult {
    cityNow: string;
    // Другие свойства, возвращаемые из API
}
export const getSearchResult  = (city: string, dispatch: any): Promise<SearchResult[]> => {
    return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&lang=ru&limit=${5}&appid=7e2ff37f25bf00f92d20d0c8c9e5b5e8`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data && data.length > 0) {
                const filteredData = data
                    .filter((item : GeoData)=> item.lat && item.lon && (item.local_names?.ru || item.name));

                const formattedData = filteredData.map((item : GeoData)=> {
                    const lat = item.lat;
                    const lon = item.lon;
                    const cityNow = item.local_names?.ru || item.name;
                    return { lat, lon, cityNow };
                });
                console.log(formattedData)
                return formattedData;
            } else {
                return [];
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return [];
        });
};
