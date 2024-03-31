import React, {useState} from "react";
import {useDispatch} from "react-redux";
import BurgerComponent from "./BurgerComponent";
import MenuComponent from "./MenuComponent";
import './SearchStyle.css'
import {getSearchResult} from "../api/getSearchResult";



const SearchComponent = () => {
    const [city, setCity] = useState( '' )
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const handleSearch = () => {
        getSearchResult(city, dispatch);
    };
    return (
        <header>
            <BurgerComponent isOpen={isOpen} setIsOpen={setIsOpen} />
            <MenuComponent isOpen={isOpen} lightTheme/>
            <div>
                <input
                    type="text"
                    placeholder="Введите город"
                    className="search"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={handleSearch}>Поиск</button>
            </div>
        </header>
    );
};
export default SearchComponent
