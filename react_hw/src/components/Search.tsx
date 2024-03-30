import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setCoordinates} from "../healper/slice";
import Burger from "./burger";
import Menu from "./menu";

interface CityState {
    string: string;
}

const Search = () => {
    const [city, setCity] = useState<CityState>({ string: '' })
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    console.log(`cityyy`, city)


    const getSearch = () => {

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&lang=ru&limit=${1}&appid=7e2ff37f25bf00f92d20d0c8c9e5b5e8`)
            .then(response => response.json())
            .then(data => {
                console.log("search",data)
                if (data && data.length > 0) {
                    if (data && data.length > 0) {
                        const lat = data[0].lat;
                        const lon = data[0].lon;
                        const cityNow = data[0].local_names.ru
                        dispatch(setCoordinates(lat, lon, cityNow));
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <header>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
            <Menu isOpen={isOpen}  lightTheme/>
            <div>
                <input
                    type={'text'}
                    placeholder={'Введите город'}
                    className={'search'}
                    value={city.string}
                    onChange={(e) => setCity({ string: e.target.value })}/>
                <button onClick={getSearch}>Поиск</button>
            </div>
        </header>
    );
};

export default Search
