import React from 'react';
import {
    ForecastFiveDays
} from "../../components/MainComponent";
import {useSelector} from "react-redux";
import SearchComponent from "../../components/SearchComponent";
import './MainStyle.css'

const MainPages = () => {
    // const latitude = useSelector((state:any) => state.coordinates.lat);
    // const longitude = useSelector((state:any) => state.coordinates.lon);
    const cityNow = useSelector((state:any) => state.coordinates.cityNow);
    // const [isOpen, setIsOpen] = useState(false);
    // const lightTheme = useContext(ThemeContext);

    return (
            <div>
                <SearchComponent/>
                <section className={'main_section'}>
                    <h2>{cityNow}</h2>
                    <div className={'main_div'}>
                        <ForecastFiveDays/>
                    </div>
                </section>
            </div>

    );
};

export default MainPages;