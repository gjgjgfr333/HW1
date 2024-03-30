import React from 'react';
import Switch from "./switch";
import {useSelector} from "react-redux";



interface MenuProps {
    isOpen: boolean;
    lightTheme: boolean
}

const Menu: React.FC<MenuProps> = ({isOpen,lightTheme}) => {
    const photoUrl = useSelector((state:any) => state.photo.photoUrl)
    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>

            <img className={'avatar_manu'} src={photoUrl} alt={`ph`}/>

            <Switch/>
        </div>
    );
};

export default Menu;