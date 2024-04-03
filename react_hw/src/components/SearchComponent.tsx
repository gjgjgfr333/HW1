import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import BurgerComponent from "./BurgerComponent";
import MenuComponent from "./MenuComponent";
import './SearchStyle.css'
import {getSearchResult} from "../api/getSearchResult";
import {useDebounce} from "../hooks/Debouns";
import {searchResult} from "../api/searchResult";
import i18n from "i18next";
interface SearchResult {
    cityNow: string;
}


const SearchComponent = () => {
    const [city, setCity] = useState( '' )
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const debounce = useDebounce(city)
    const [suggestions, setSuggestions] = useState<SearchResult[]>([]);

    useEffect(() => {
        if (debounce) {
            getSearchResult(debounce, dispatch)
                .then(data => {
                    setSuggestions(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [debounce, dispatch]);
    const handleSuggestionClick = (selectedCity: string) => {
        setCity(selectedCity);
        setSuggestions([]); 
    };
    const handleSearch = () => {
        searchResult(city, dispatch, i18n)

    };
    return (
        <header>
            <BurgerComponent isOpen={isOpen} setIsOpen={setIsOpen} />
            <MenuComponent isOpen={isOpen} lightTheme/>
            <div className={'search_button'}>
                <div>
                    <input
                        type="text"
                        placeholder="Введите город"
                        className="search"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch(); // Добавлены скобки для вызова функции
                            }
                        }}
                    />
                    {suggestions.length > 0 && (
                        <div className="suggestions">
                            {suggestions.map((item, index) => (
                                <div key={index} className="suggestion" onClick={() => handleSuggestionClick(item.cityNow)}>
                                    {item.cityNow}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <button className={'button_search'} onClick={handleSearch}><div className={'icon_search'}></div></button>
            </div>
        </header>
    );
};
export default SearchComponent
